import type { Role } from './types';

// A graduate data-engineering role — the plumbing beneath the analytics and the
// Business Brain. Written from scratch for MonoEdge — there was no source JD.
export const dataEngineer: Role = {
  slug: 'data-engineer-b4e8c1',
  id: 'DATA-ENG',
  title: 'Data Engineer',
  eyebrow: 'Role 06 · Data · Graduate',
  location: 'Pune, with occasional travel to customer sites',
  employment: 'Full-time · graduate / entry-level',
  reportsTo: 'Founder and senior team',
  travel: 'Occasional, to understand data at the source',
  summary:
    "Build the pipelines that make a plant's data usable — PLC streams, lab results, and ERP records ingested, cleaned, and joined into something the rest of the system can reason over.",
  signal: 'pipeline',
  positioning: 'Graduate / entry-level role.',

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
        'Every model, every report, every answer our product gives sits on top of data — and in a factory that data is a mess. PLCs stream at 10 to 100 Hz, the lab records once a shift, the ERP updates once a day, units are inconsistent, tags are undocumented, and sources go quiet without warning.',
        'This role builds the layer that turns all of that into something clean, joined, and queryable. You are the reason the data scientist and the Business Brain can trust the numbers they work with. It is foundational, unglamorous, and genuinely hard — and getting it right is what makes everything above it possible.',
      ],
    },
    {
      heading: "What you'll work on",
      kind: 'list',
      body: [
        {
          lead: 'Ingestion',
          text: '— pulling data in from many sources: PLC and sensor streams (OPC UA, Modbus), lab systems, ERP exports, and flat files, each on its own schedule and format.',
        },
        {
          lead: 'Cleaning and validation',
          text: '— handling missing values, unit mismatches, duplicate rows, and silent gaps, and catching bad data before it reaches a model or a report.',
        },
        {
          lead: 'Joining heterogeneous sources',
          text: '— aligning data recorded at very different frequencies and timestamps into tables that can actually be analysed together.',
        },
        {
          lead: 'Storage and access',
          text: '— shaping how time-series and relational data are stored so that queries are fast and the schema makes sense to the people using it.',
        },
        {
          lead: 'Reliable pipelines',
          text: '— building jobs that run on a schedule, recover from failure, and tell someone when a source stops sending data.',
        },
      ],
    },
    {
      heading: "What you'll do",
      kind: 'list',
      body: [
        {
          text: 'Write Python and SQL to move, clean, and join data from real industrial sources — not tidy sample datasets.',
        },
        {
          text: 'Design table schemas with the senior team so that heterogeneous data lands somewhere sensible and stays queryable.',
        },
        {
          text: 'Build validation and monitoring so a broken or missing feed is caught early, not discovered in a wrong report a week later.',
        },
        {
          text: 'Work closely with the data scientist to give models the clean, joined tables they need, in the shape they need them.',
        },
        {
          text: 'Occasionally go to source — a plant or an automation partner — to understand what a field actually means before you build a pipeline around it.',
        },
      ],
    },
    {
      heading: 'Who should apply',
      kind: 'list',
      body: [
        {
          lead: 'A recent graduate',
          text: 'in Computer Science, IT, Data Science, Electronics, Instrumentation, or a related field. What matters is comfort with data and code, not the exact branch.',
        },
        {
          lead: 'Solid Python and SQL:',
          text: 'you can write a script that reads, transforms, and writes data, and query a database confidently. You should be able to reason about a join, not just run one.',
        },
        {
          lead: 'A feel for data structure:',
          text: 'you understand tables, keys, and types, and why a well-shaped schema saves everyone downstream a lot of pain.',
        },
        {
          lead: 'Patience with messy data:',
          text: 'missing values, inconsistent units, undocumented sources. You fix it methodically rather than complain about it — and you know that most of the work is here.',
        },
        {
          lead: 'A reliability mindset:',
          text: 'you care whether a job ran, whether it ran correctly, and how you would know if it did not.',
        },
        {
          lead: 'Something to show:',
          text: 'a project where you moved or wrangled real data — a scraper, an ETL script, a dataset you cleaned and analysed. Anything you can walk us through.',
        },
      ],
    },
    {
      heading: 'Nice to have',
      kind: 'list',
      body: [
        { text: 'Any exposure to time-series or industrial data — sensors, IoT, logs, or PLC/SCADA tags.' },
        { text: 'Familiarity with a workflow or scheduling tool (Airflow, cron, or similar) and the idea of an ETL/ELT pipeline.' },
        { text: 'Comfort with pandas, and with databases beyond a single table — Postgres, a time-series DB, or a warehouse.' },
        { text: 'Basic cloud or Linux comfort — running a job somewhere other than your laptop.' },
        { text: 'Familiarity with Git, the command line, and working in a small team.' },
      ],
    },
    {
      heading: 'What you will learn',
      kind: 'prose',
      body: [
        'You will learn how data engineering works on genuinely hard, real-world data — the kind with no schema and no documentation — from a senior team that builds analytics and machine learning on top of what you produce. You will see exactly how your pipelines feed real decisions.',
        'You will work directly with the Founder and senior engineers, with real ownership of the data layer from early on. Because we are small, the tables you build are used almost immediately.',
      ],
    },
    {
      heading: 'How we work',
      kind: 'prose',
      body: [
        'We operate with agility and a rigorous focus on real, EBITDA-level impact at the customer, not on isolated metrics. You will be given ownership early, and the support to grow into it.',
        'MonoEdge speaks the way a reliable colleague would — calm, direct, and never overselling itself. We would rather tell you plainly what we do not yet know than pretend we know it, and we expect our data to hold to the same standard.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'You need to combine a PLC signal recorded every 100 ms with a lab result recorded once per shift, for the same batch. How do you approach it?',
      options: [
        { id: 'A', text: 'Copy the single lab value onto every 100 ms row so both share one fine-grained index' },
        { id: 'B', text: 'Throw away the PLC data and keep only the lab data, which is simpler' },
        {
          id: 'C',
          text: 'Aggregate the PLC signal to the shift/batch level it will actually be used at, then join on batch — handling timing and boundaries explicitly',
        },
        { id: 'D', text: 'Average everything to a daily figure so all sources match' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'One of your daily pipelines usually writes about 50,000 rows. Today it wrote 40, and did not error. What is the right response?',
      options: [
        { id: 'A', text: 'Nothing — it ran without an error, so it is fine' },
        { id: 'B', text: 'Delete today\'s rows and re-run once, hoping it fixes itself' },
        {
          id: 'C',
          text: 'Treat the row count as a red flag, check whether a source went quiet, and add a validation that alerts on an unexpected drop',
        },
        { id: 'D', text: 'Fill the missing rows with yesterday\'s values so the totals look normal' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'A temperature column arrives with some values in °C and some clearly in °F, with no flag telling you which is which. What do you do?',
      options: [
        { id: 'A', text: 'Load it as-is; the model can figure the units out later' },
        { id: 'B', text: 'Assume everything is °C, since that is most common, and move on' },
        {
          id: 'C',
          text: 'Trace the source of each range with the team, standardise to one unit with a documented rule, and record which rows were converted',
        },
        { id: 'D', text: 'Drop every row above a threshold so only °C-looking values remain' },
      ],
    },
  ],

  written: {
    brief:
      'One question, and the part of the application we read most closely. We care about how you handled the mess, not how big the dataset was.',
    prompt:
      'Tell us about a time you worked with messy or awkward data. Where did it come from, what was wrong with it, and how did you get it into a state you could trust?',
    hint: 'A few hundred words at most. Be specific about the problems and how you checked your fix was right.',
    maxLength: 2000,
  },
};
