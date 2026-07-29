import type { Role } from './types';

// A graduate front-end role focused on UI/UX. Written from scratch for
// MonoEdge — there was no source JD.
export const frontendEngineer: Role = {
  slug: 'frontend-engineer-a7f3d2',
  id: 'FRONTEND',
  title: 'Front End Engineer — UI / UX',
  eyebrow: 'Role 05 · Product · Graduate',
  location: 'Pune, with occasional travel to customer sites',
  employment: 'Full-time · graduate / entry-level',
  reportsTo: 'Founder and senior team',
  travel: 'Occasional, to see the product used on the floor',
  summary:
    "Build the product surfaces MonoEdge's users actually touch — clear, fast, multilingual screens that turn industrial data into decisions plant teams trust.",
  signal: 'layout',
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
        'The intelligence in our product is only as useful as the screen it arrives on. Our user is a plant owner or a shift supervisor who has been shown dashboards before and was disappointed — too many charts, not enough answers. The interface is where we either earn their trust or lose it.',
        'This role owns that surface. You will build the parts of the product people actually look at: the reports, the alerts, the views that take a hard industrial problem and make it legible in a glance. Clarity is the whole job — a screen that is beautiful but confusing has failed.',
      ],
    },
    {
      heading: "What you'll work on",
      kind: 'list',
      body: [
        {
          lead: 'Product UI',
          text: '— building and maintaining the web application in React and TypeScript, from small components up to full views.',
        },
        {
          lead: 'Data-dense interfaces',
          text: '— charts, tables, and reports that present real production data honestly, including when the data is uncertain or incomplete.',
        },
        {
          lead: 'UX for non-technical users',
          text: '— the person using this is running a factory, not reading documentation. Flows have to be obvious on the first try.',
        },
        {
          lead: 'Multilingual, on-the-floor design',
          text: '— screens that hold up in English, Hindi, and Marathi (Devanagari), and stay readable on a tablet in a bright, busy plant.',
        },
        {
          lead: 'Design system',
          text: '— working with the Founder and the designer to build and maintain a small, consistent component and style system.',
        },
      ],
    },
    {
      heading: "What you'll do",
      kind: 'list',
      body: [
        {
          text: 'Turn a rough brief or a design into working, responsive UI — and push back with a better idea when the design fights the data.',
        },
        {
          text: 'Build interfaces that stay fast and legible on modest hardware and patchy plant networks, not just on your laptop.',
        },
        {
          text: 'Take real production data from our APIs and shape it into views a plant owner can act on without a training session.',
        },
        {
          text: 'Sweat the details of UX — empty states, loading, errors, and the difference between "no data" and "zero".',
        },
        {
          text: 'Occasionally sit with real users, or watch a supervisor use the product on the floor, and bring what you learn back into the interface.',
        },
      ],
    },
    {
      heading: 'Who should apply',
      kind: 'list',
      body: [
        {
          lead: 'A recent graduate',
          text: 'in Computer Science, IT, Design, or a related field — or a self-taught developer with work you can show. The degree matters less than what you have built.',
        },
        {
          lead: 'Solid web fundamentals:',
          text: 'HTML, CSS, and JavaScript, with real comfort in the browser. You can build a responsive layout by hand and understand how the page actually renders.',
        },
        {
          lead: 'React and some TypeScript:',
          text: 'you have built at least one real interface in React. You do not need to be an expert in TypeScript, but you should be willing to work in it.',
        },
        {
          lead: 'A genuine eye for UI/UX:',
          text: 'you notice spacing, alignment, and hierarchy, and you care when something is a pixel off or a click too deep. You can explain why one layout reads more clearly than another.',
        },
        {
          lead: 'Clarity over cleverness:',
          text: 'you would rather a user understand a screen in one pass than admire an animation. Restraint is a skill you value.',
        },
        {
          lead: 'Something to show:',
          text: 'a personal project, a college project, a freelance piece — anything real you can walk us through and take responsibility for.',
        },
      ],
    },
    {
      heading: 'Nice to have',
      kind: 'list',
      body: [
        { text: 'Any charting or data-visualisation work — a dashboard, a report, an interactive graph.' },
        { text: 'Figma comfort, or the ability to move between a design file and code without losing the intent.' },
        { text: 'Devanagari or multilingual layout experience — laying out Hindi or Marathi text well.' },
        { text: 'An eye for performance: bundle size, render cost, and why a page feels slow.' },
        { text: 'Familiarity with Git, the command line, and shipping in a small team.' },
      ],
    },
    {
      heading: 'What you will learn',
      kind: 'prose',
      body: [
        'You will own real product surfaces early, working directly with the Founder and senior team. You will learn how to build interfaces for people whose job is not software, how to present data honestly, and how a small product team ships and iterates against real users.',
        'Because we are small, your work reaches a customer quickly — there is no layer of process between what you build and someone using it on a plant floor.',
      ],
    },
    {
      heading: 'How we work',
      kind: 'prose',
      body: [
        'We operate with agility and a rigorous focus on real, EBITDA-level impact at the customer, not on isolated metrics. You will be given ownership early, and the support to grow into it.',
        'MonoEdge speaks the way a reliable colleague would — calm, direct, and never overselling itself. We would rather be understood than admired, and that principle runs from the copy right through to the interface.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'A report screen needs to show a production number that is still being calculated for the current shift. What is the right thing to put on screen?',
      options: [
        { id: 'A', text: 'Show 0 — it is a number, and the layout stays clean' },
        {
          id: 'B',
          text: 'Show a clear "calculating…" or "not yet available" state, distinct from a real zero, so no one misreads it',
        },
        { id: 'C', text: 'Hide the whole card until the number is ready' },
        { id: 'D', text: 'Show last shift\'s number without saying so, to avoid a blank space' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'The Founder reviews your dashboard and says only: "It feels cluttered." What do you do next?',
      options: [
        { id: 'A', text: 'Add tabs so each chart gets its own screen' },
        { id: 'B', text: 'Shrink every element so more fits above the fold' },
        {
          id: 'C',
          text: 'Ask what decision this screen is meant to support, then cut everything that does not serve it and come back with a simpler layout',
        },
        { id: 'D', text: 'Change the colour scheme to something calmer' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'Your interface is smooth on your laptop but sluggish on the plant\'s older tablet over a weak network. Where do you look first?',
      options: [
        { id: 'A', text: 'Tell the customer to use a better tablet' },
        {
          id: 'B',
          text: 'Measure what is actually slow — payload size, number of requests, and render cost on that device — before changing anything',
        },
        { id: 'C', text: 'Add a loading spinner so it at least feels responsive' },
        { id: 'D', text: 'Rewrite it in a different framework' },
      ],
    },
  ],

  written: {
    brief:
      'One question, and the part of the application we read most closely. We would rather see one thing explained well than a long list of technologies.',
    prompt:
      'Point us to one interface you built and tell us what you were responsible for. What decision did the user have to make, and how did your design help them make it?',
    hint: 'A link plus a few hundred words at most. Say what was hard, and what you would change now.',
    maxLength: 2000,
  },
};
