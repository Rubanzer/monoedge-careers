import type { Role } from './types';

// The first non-senior role: a graduate hire for the Business Brain team.
// Written from scratch for MonoEdge — there was no source JD.
export const businessBrainAssociate: Role = {
  slug: 'business-brain-associate-5c1a7e',
  id: 'BIZ-BRAIN',
  title: 'Graduate Engineer — Business Brain',
  eyebrow: 'Role 04 · Business Brain · Graduate',
  location: 'Pune, with frequent travel to customer sites across India',
  employment: 'Full-time · graduate / entry-level',
  reportsTo: 'Founder and senior team',
  travel: 'Frequent, to customer plants and automation partners',
  summary:
    "Get MonoEdge's Business Brain live on real plant floors — deploy it, wire it into PLCs and automation partners, then turn what comes back into root-cause answers.",
  signal: 'network',
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
      heading: 'What the Business Brain is',
      kind: 'prose',
      body: [
        'The Business Brain is the decision layer of our product — the part that behaves like an always-on analyst rather than another dashboard. It reads what is happening across a plant, connects production data to sales, quality, energy, and cost, and tells the people running the floor what is going wrong and why.',
        'None of that matters until it is running on a real line. This role is how it gets there. You are the person who takes the system to a customer plant, stands it up alongside their machines and automation partners, and then stays close to the data it produces to make sure the answers it gives are true.',
      ],
    },
    {
      heading: "What you'll work on",
      kind: 'list',
      body: [
        {
          lead: 'On-site deployment',
          text: '— travelling to customer plants, setting up our hardware and software next to live production, and getting the Business Brain reading real data within days, not weeks.',
        },
        {
          lead: 'PLCs and automation partners',
          text: '— working with the customer\'s controls team and their automation vendors to read the right tags over OPC UA / Modbus, agree on what each signal means, and integrate cleanly without disrupting the line.',
        },
        {
          lead: 'Root cause analysis',
          text: '— when rejects spike or a batch goes bad, digging into the data with the plant team to find the actual cause rather than the first plausible story.',
        },
        {
          lead: 'Data analytics',
          text: '— pulling, cleaning, and joining messy industrial data, building the charts and summaries that make a problem legible, and checking whether what the system reports matches what the floor sees.',
        },
        {
          lead: 'Basic machine learning',
          text: '— helping the senior team validate and monitor the models behind the Business Brain: preparing labelled data, sanity-checking predictions against ground truth, and flagging when a model has drifted.',
        },
      ],
    },
    {
      heading: "What you'll do",
      kind: 'list',
      body: [
        {
          text: 'Spend real time on customer plant floors — this is a travelling, hands-on role, not a desk job. Expect to be on-site for stretches of a deployment.',
        },
        {
          text: 'Set up and commission our systems at a customer site: connect to PLCs, verify tags with the automation partner, and confirm data is flowing correctly end to end.',
        },
        {
          text: 'Sit with QC and operations staff — often in Hindi or Marathi — to understand what a signal actually means before trusting it, and to run root cause analysis on quality or yield problems together.',
        },
        {
          text: 'Clean, join, and analyse the data coming back, and prepare the reports and findings that go to plant leadership and to our own team.',
        },
        {
          text: 'Support the senior data and vision team on the machine learning side: data preparation, validation, and keeping an eye on model behaviour in production.',
        },
        {
          text: 'Write down what you learn at each site so the next deployment is faster than the last.',
        },
      ],
    },
    {
      heading: 'Who should apply',
      kind: 'list',
      body: [
        {
          lead: 'A recent graduate in any engineering discipline.',
          text: 'What matters is the mix of the physical and the analytical, and a genuine willingness to get onto a plant floor — not the exact branch.',
        },
        {
          lead: 'Genuinely willing to travel',
          text: 'and to work on a plant floor — hot, loud, and unglamorous. If the idea of spending a week commissioning a system at a factory sounds good rather than off-putting, this is for you.',
        },
        {
          lead: 'Some basic coding knowledge:',
          text: 'you can write a simple Python script and are comfortable working with data. You do not need production-grade software experience — the willingness to learn matters more.',
        },
        {
          lead: 'A basic, honest grasp of machine learning:',
          text: 'you understand training vs. testing, overfitting, and why a model that scores well on paper can still be wrong on the floor. Depth is not expected — curiosity and clear thinking are.',
        },
        {
          lead: 'A root-cause temperament:',
          text: 'when something breaks you want to know why, and you keep asking until the explanation actually fits the evidence rather than stopping at the first answer.',
        },
        {
          lead: 'Clear communication',
          text: 'in English, and ideally Hindi or Marathi, so you can talk to a shift supervisor and a founder in the same day.',
        },
      ],
    },
    {
      heading: 'Nice to have',
      kind: 'list',
      body: [
        { text: 'Any exposure to PLCs, SCADA, OPC UA, or Modbus — a course, a project, or an internship counts.' },
        { text: 'A final-year or personal project in data analytics or machine learning that you can walk us through.' },
        { text: 'Time spent in a factory, workshop, or on an industrial internship — you know what a plant floor feels like.' },
        { text: 'Familiarity with Git, the command line, and working in a small team.' },
        { text: 'Any manufacturing-adjacent knowledge: yield, rejects, OEE, downtime, energy per tonne.' },
      ],
    },
    {
      heading: 'What you will learn',
      kind: 'prose',
      body: [
        'This is a rare role for a fresher: you will see the whole arc, from a raw PLC signal on a factory floor to a decision a plant owner acts on. You will learn industrial automation, real data analytics on messy data, and applied machine learning — from a senior team that has shipped all three.',
        'You will work directly with the Founder and the senior engineers, with real responsibility from the start. We are small enough that your work reaches a customer quickly, and we will invest in your growth.',
      ],
    },
    {
      heading: 'How we work',
      kind: 'prose',
      body: [
        'We operate with agility and a rigorous focus on real, EBITDA-level impact — our performance is validated by financial improvements at the customer, not by isolated metrics. You will be given ownership early, and the support to grow into it.',
        'MonoEdge speaks the way a reliable colleague would — calm, direct, and never overselling itself. We would rather be understood than admired, and we would rather tell you plainly what we do not yet know than pretend we know it.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'You are commissioning our system at a plant. A temperature reading from the PLC looks wrong — it sits at a flat 20 °C while the furnace is clearly running hot. What do you do first?',
      options: [
        { id: 'A', text: 'Assume the sensor is broken and ask the plant to replace it' },
        {
          id: 'B',
          text: 'Check the tag mapping and scaling with the automation partner — you may be reading the wrong tag or a raw, unscaled value',
        },
        { id: 'C', text: 'Apply a software offset so the number looks right on our side' },
        { id: 'D', text: 'Ignore it for now and note it as a data quality issue to fix later' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'Rejects on a line jumped last Tuesday. You find that rejects are higher on batches that ran at higher line speed. The plant head asks if slowing the line will fix it. What is the most honest answer?',
      options: [
        { id: 'A', text: 'Yes — the data clearly shows higher speed causes more rejects' },
        {
          id: 'B',
          text: 'Not certain yet — higher speed may just coincide with a different material or shift; check what else changed on Tuesday before recommending a change',
        },
        { id: 'C', text: 'No — line speed can never affect reject rate' },
        { id: 'D', text: 'Yes, as long as the correlation is statistically significant' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'A model that flags likely defects scored 95% accuracy in testing, but on the plant floor the operators say it misses many real defects. What is the most likely explanation to check first?',
      options: [
        { id: 'A', text: 'The operators are wrong; the 95% number is the ground truth' },
        { id: 'B', text: 'The model simply needs to be made larger and retrained' },
        {
          id: 'C',
          text: 'The live conditions differ from the test data — lighting, material, or defect types the model never saw — so its test score does not transfer',
        },
        { id: 'D', text: 'Accuracy is the wrong word; nothing can be done about it' },
      ],
    },
  ],

  written: {
    brief:
      'One question, and the part of the application we read most closely. We care about how you think, not how polished the project was.',
    prompt:
      'Tell us about a time you figured out why something was going wrong — a project, an experiment, a bug, a machine, anything. How did you find the real cause, and what did you rule out along the way?',
    hint: 'A few hundred words at most. Be specific about what the evidence was and how you tested your explanation.',
    maxLength: 2000,
  },
};
