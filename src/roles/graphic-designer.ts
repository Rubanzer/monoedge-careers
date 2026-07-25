import type { Role } from './types';

// This role was written from scratch for MonoEdge — there was no source JD.
export const graphicDesigner: Role = {
  slug: 'graphic-designer-d8c105',
  id: 'DESIGN',
  title: 'Graphic Designer & Video Editor',
  eyebrow: 'Role 03 · Design',
  location: 'Pune, with travel to manufacturing sites across India',
  employment: 'Full-time · on-site / hybrid',
  reportsTo: 'Founder',
  travel: 'Occasional, to partner plants for shoots',
  summary:
    'Own how MonoEdge looks and sounds — brand, product collateral, and plant-floor films that explain the work honestly.',
  signal: 'frame',

  sections: [
    {
      heading: 'About MonoEdge',
      kind: 'prose',
      body: [
        'MonoEdge develops an advanced intelligence layer for the Indian mid-market manufacturing sector. We provide data-driven insights and strategic recommendations to plant leadership and operations supervisors across diverse linguistic contexts, including English, Hindi, and Marathi.',
        'As a technically-driven, bootstrapped organization, we are defining a new category in industrial optimization.',
      ],
    },
    {
      heading: 'Why this role exists',
      kind: 'prose',
      body: [
        'We are selling something that is genuinely hard to explain. Our buyer is a plant owner who has been pitched dashboards before and was disappointed. Our product runs quietly in the background and its value shows up as fewer rejects and lower energy per tonne, not as a screen full of charts.',
        'That is a communication problem before it is a design problem. We need someone who can look at a working line, understand what actually changed, and make that legible — in a deck, a one-page case study, a two-minute film, or a product screen.',
      ],
    },
    {
      heading: "What you'll work on",
      kind: 'list',
      body: [
        {
          lead: 'Brand stewardship',
          text: '— you become the owner of the MonoEdge identity: the logo system, the type system, the colour palette, and the judgment about when to hold the line and when to extend it.',
        },
        {
          lead: 'Sales and category collateral',
          text: '— pitch decks, one-pagers, and case studies aimed at plant owners and operations heads who are sceptical by default.',
        },
        {
          lead: 'Plant-floor films',
          text: '— short case-study and explainer videos shot in working factories. You will handle the edit, the grade, the sound, and the on-screen graphics.',
        },
        {
          lead: 'Product surfaces',
          text: '— working with the Founder on in-product visuals: report layouts, chart styling, and the parts of the interface where clarity matters most.',
        },
        {
          lead: 'Multilingual output',
          text: '— our audience reads and listens in English, Hindi, and Marathi. Layouts and subtitles need to survive all three.',
        },
      ],
    },
    {
      heading: "What you'll do",
      kind: 'list',
      body: [
        {
          text: 'Take a rough brief from the Founder and come back with two considered options and the reasoning behind each, rather than one safe answer.',
        },
        {
          text: 'Travel to partner plants, shoot usable footage in noisy and badly lit environments, and come back with something that cuts.',
        },
        {
          text: 'Build and maintain the asset system — templates, components, and files that other people can pick up without asking you first.',
        },
        {
          text: 'Turn analytical output into visuals that are honest about uncertainty. A chart that overstates what we know is a brand problem for us.',
        },
        {
          text: 'Set the subtitle, caption, and typographic standards for Devanagari alongside Latin so nothing looks like an afterthought.',
        },
      ],
    },
    {
      heading: 'What you bring',
      kind: 'list',
      body: [
        {
          lead: '3+ years in graphic design with real video editing experience',
          text: '— not a designer who occasionally trims a clip, and not an editor who occasionally opens a design tool. We need both hands.',
        },
        {
          lead: 'A portfolio that shows range:',
          text: 'at least one piece of long-form print or deck work, and at least one edited video you cut end to end. Tell us what you were responsible for.',
        },
        {
          lead: 'Command of the tools:',
          text: 'Figma or Adobe Illustrator and InDesign for design, Premiere Pro or DaVinci Resolve for the edit, and After Effects for motion.',
        },
        {
          lead: 'Typographic discipline:',
          text: 'you can set a dense table, a long case study, and a title card, and make all three feel like the same company.',
        },
        {
          lead: 'Comfort in unglamorous settings:',
          text: 'a working plant is hot, loud, and does not stop for your shot. You get what you need without disrupting production.',
        },
        {
          lead: 'Clear over clever:',
          text: 'you would rather a plant owner understand the message in one pass than admire the execution.',
        },
      ],
    },
    {
      heading: 'Nice to have',
      kind: 'list',
      body: [
        { text: 'Devanagari typesetting experience — Hindi or Marathi layout, subtitling, or lettering.' },
        { text: 'Motion graphics for data: animated charts, process diagrams, before-and-after comparisons.' },
        { text: 'Field audio competence — lavs, wind protection, and rescuing a noisy factory recording in post.' },
        { text: 'Photography on industrial sites, including working with mixed and difficult light.' },
        { text: 'Any exposure to manufacturing, industrial, or B2B technical brands.' },
      ],
    },
    {
      heading: 'How we work',
      kind: 'prose',
      body: [
        'You will work directly with the Founder, with full ownership of the brand and the output that carries it. This is a senior individual contributor role: there is no design team above you to approve your work, and there will not be one for a while.',
        'MonoEdge speaks the way a reliable colleague would — calm, direct, and never overselling itself. We would rather be understood than admired. If a piece of work is uncertain, we say so, and that honesty should show up in the design as much as in the copy.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'The Founder reviews your case study layout and says only: "It needs to pop more." What do you do next?',
      options: [
        { id: 'A', text: 'Raise the contrast, enlarge the headline, and add an accent colour' },
        {
          id: 'B',
          text: 'Ask what the piece needs to achieve and who is reading it, then come back with two directions',
        },
        { id: 'C', text: 'Look at what competitors in the space are doing and match their energy' },
        { id: 'D', text: 'Explain that the current layout already follows the brand guidelines' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'You are cutting a two-minute case study shot on a live plant floor. The footage is usable but the interview audio is buried under machine noise. Where does your first hour go?',
      options: [
        { id: 'A', text: 'Colour grading, so the material looks worth watching' },
        { id: 'B', text: 'Adding music to cover the noise floor' },
        { id: 'C', text: 'Getting the speech intelligible and cutting the story down to what earns its place' },
        { id: 'D', text: 'Building the motion graphics package for the on-screen numbers' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'A results slide shows a 9% yield improvement, but it comes from a four-week pilot on one line. How do you present it?',
      options: [
        { id: 'A', text: 'Lead with 9% at full size — it is the strongest number we have' },
        { id: 'B', text: 'Show the 9% together with the scope it came from, plainly, in the same eyeline' },
        { id: 'C', text: 'Round it to "up to 10%" so it reads more cleanly' },
        { id: 'D', text: 'Leave it out until there is more data' },
      ],
    },
  ],

  written: {
    brief:
      'One question, and the part of the application we read most closely. We would rather see one piece explained honestly than a list of everything you have touched.',
    prompt:
      'Point us to one piece of work you are proud of and tell us what you were responsible for. If it was a team effort, say which parts were yours.',
    hint: 'A link plus a few hundred words at most. Say what the piece had to achieve, and whether it did.',
    maxLength: 2000,
  },
};
