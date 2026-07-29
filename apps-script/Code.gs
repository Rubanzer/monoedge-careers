/**
 * MonoEdge hiring funnel — Google Sheets + Drive receiver.
 *
 * Setup
 *   1. Open the destination Google Sheet.
 *   2. Extensions > Apps Script. Paste this file over Code.gs. Save.
 *   3. Deploy > New deployment > type "Web app".
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the /exec URL it gives you.
 *   4. Put that URL in public/config.js as ENDPOINT, commit, and push.
 *
 * Re-deploy note: after editing this file you must run Deploy > Manage
 * deployments > edit > Version: New version, or the live URL keeps serving
 * the old code.
 *
 * The page posts JSON as text/plain so the browser treats it as a simple
 * request. Apps Script cannot answer CORS preflight, so this matters.
 */

// Leave blank when this script is bound to the Sheet (the normal case).
var SHEET_ID = '';

// Files land here. The folder is created on first submission.
var DRIVE_FOLDER = 'MonoEdge Applications';

// Which tab each role writes to. Change a value here to point a role at a
// different tab; a role with no entry falls back to a tab named after its id.
// Missing tabs are created on first submission.
var ROLE_SHEETS = {
  'CV-ENG': 'Sheet1', // Senior Computer Vision Engineer
  'DATA-SCI': 'Sheet2', // Senior Data Scientist
  'DESIGN': 'Sheet3', // Graphic Designer & Video Editor
  'BIZ-BRAIN': 'Sheet4', // Graduate Engineer — Business Brain
};

// A human filling three parts cannot get here in under this many seconds.
var MIN_SECONDS_ON_PAGE = 20;

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: 'Empty request.' });
    }

    var payload = JSON.parse(e.postData.contents);

    // Honeypot: only an automated filler completes a hidden field.
    if (payload.website) {
      return json({ ok: true });
    }

    // Timing: reject anything submitted implausibly fast.
    var seconds = (Date.now() - Number(payload.openedAt || 0)) / 1000;
    if (!payload.openedAt || seconds < MIN_SECONDS_ON_PAGE) {
      return json({ ok: false, error: 'That was too quick. Please try again.' });
    }

    var details = payload.details || {};
    if (!details.fullName || !details.email) {
      return json({ ok: false, error: 'Name and email are required.' });
    }

    var folder = roleFolder(payload.roleId);
    var resumeUrl = saveFile(folder, payload.resume, details.fullName + ' — CV');

    var sheet = sheetForRole(payload.roleId, payload.answers || {});
    sheet.appendRow(buildRow(payload, details, resumeUrl));

    return json({ ok: true });
  } catch (error) {
    // Logged to the Apps Script execution log for debugging.
    console.error(error);
    return json({ ok: false, error: 'We could not record your application.' });
  }
}

function doGet() {
  return json({ ok: true, service: 'monoedge-hiring' });
}

/* -------------------------------------------------------------------------- */

function json(object) {
  return ContentService.createTextOutput(JSON.stringify(object)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function book() {
  return SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
}

function answerKeys(answers) {
  return Object.keys(answers).sort();
}

/** One tab per role, because each role asks different questions. */
function sheetForRole(roleId, answers) {
  var name = ROLE_SHEETS[roleId] || roleId || 'UNKNOWN';
  var spreadsheet = book();
  var sheet = spreadsheet.getSheetByName(name);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(name);
  }

  // Headers go in when the tab is empty — which covers both a tab we just
  // created and a pre-existing blank Sheet1.
  if (sheet.getLastRow() === 0) {
    var headers = [
      'Timestamp',
      'Role',
      'Name',
      'Email',
      'Phone',
      'Location',
      'Experience',
      'Employer',
      'Notice period',
      'Links',
      'CV',
    ].concat(answerKeys(answers));

    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function buildRow(payload, details, resumeUrl) {
  var answers = payload.answers || {};
  return [
    new Date(),
    payload.roleTitle || payload.roleId || '',
    details.fullName || '',
    details.email || '',
    details.phone || '',
    details.location || '',
    details.experience || '',
    details.employer || '',
    details.notice || '',
    details.links || '',
    resumeUrl,
  ].concat(
    answerKeys(answers).map(function (key) {
      return answers[key];
    })
  );
}

function roleFolder(roleId) {
  var root = folderNamed(DriveApp.getRootFolder(), DRIVE_FOLDER);
  return folderNamed(root, roleId || 'UNKNOWN');
}

function folderNamed(parent, name) {
  var existing = parent.getFoldersByName(name);
  return existing.hasNext() ? existing.next() : parent.createFolder(name);
}

/**
 * Writes one base64 attachment to Drive and returns a link, or '' when the
 * submission had no such file (a browser that could not record, for example).
 */
function saveFile(folder, file, label) {
  if (!file || !file.data) return '';

  var extension = (file.name || '').split('.').pop();
  var filename = label + (extension ? '.' + extension : '');
  var blob = Utilities.newBlob(
    Utilities.base64Decode(file.data),
    file.mimeType || 'application/octet-stream',
    filename
  );

  return folder.createFile(blob).getUrl();
}
