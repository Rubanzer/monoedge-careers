import type { Role } from './types';

// Adapted from the MonoEdge "Product Owner – Business Brain" JD (2–4 yrs).
export const productOwnerBusinessBrain: Role = {
  slug: 'product-owner-business-brain-7b3e6c',
  id: 'PO-BRAIN',
  title: 'Product Owner — Business Brain',
  eyebrow: 'Role 08 · Product',
  location: 'Pune, Maharashtra, with occasional travel to customer sites',
  employment: 'Full-time · permanent',
  reportsTo: 'Founder',
  travel: 'Occasional, to customer sites',
  summary:
    'Own the Business Brain roadmap and stand between customers and engineering — turning what plant teams need into what gets built, and accepted.',
  signal: 'roadmap',
  positioning: 'Product ownership · 2–4 years.',

  sections: [
    {
      heading: 'About MonoEdge',
      kind: 'prose',
      body: [
        'MonoEdge is an early-stage technology company building artificial intelligence products for the manufacturing sector. We work directly with manufacturers to convert plant, process, and business data into decisions that improve output, quality, and reliability.',
        'As a technically-driven, bootstrapped organization, we are defining a new category in industrial optimization.',
      ],
    },
    {
      heading: 'Position summary',
      kind: 'prose',
      body: [
        'As Product Owner for the Business Brain, you own the product roadmap and act as the principal interface between customers and the engineering team.',
        'You own prioritisation, requirement definition, and acceptance of delivered functionality — and you are accountable for ensuring that the product addresses real customer needs and business objectives.',
      ],
    },
    {
      heading: "What you'll own",
      kind: 'list',
      body: [
        {
          lead: 'The roadmap and backlog',
          text: '— own and maintain them, prioritising work on the basis of customer value and business impact.',
        },
        {
          lead: 'Requirements',
          text: '— elicit and validate them from customers, including plant leadership and operations teams, and translate them into clear specifications.',
        },
        {
          lead: 'Acceptance',
          text: '— define acceptance criteria for each deliverable and review completed work against them.',
        },
        {
          lead: 'The engineering partnership',
          text: '— work closely with the team throughout the development cycle, clarifying scope and resolving open questions.',
        },
        {
          lead: 'The feedback loop',
          text: '— maintain a structured loop from live deployments and pilot customers back into product planning.',
        },
        {
          lead: 'Commercial readiness',
          text: '— support leadership with inputs on product positioning and packaging, and keep documentation, release notes, and internal reference material current.',
        },
      ],
    },
    {
      heading: 'What you bring',
      kind: 'list',
      body: [
        {
          lead: "A bachelor's degree",
          text: 'in engineering, technology, management, or a related discipline.',
        },
        {
          lead: '2–4 years of relevant experience',
          text: 'in product ownership, product management, business analysis, or a comparable role.',
        },
        {
          lead: 'A demonstrated ability to gather requirements',
          text: 'from business users and convert them into structured specifications.',
        },
        {
          lead: 'Comfort working with data,',
          text: 'and the ability to engage substantively with technical teams.',
        },
        {
          lead: 'Strong written and verbal communication,',
          text: 'with a disciplined approach to documentation.',
        },
        {
          lead: 'Language and travel:',
          text: 'professional fluency in English, together with Marathi or Hindi, and a willingness to undertake occasional travel to customer sites.',
        },
      ],
    },
    {
      heading: 'Nice to have',
      kind: 'list',
      body: [
        { text: 'Exposure to B2B enterprise software, the manufacturing or industrial sector, or AI and data products.' },
        { text: 'Familiarity with Agile delivery practices.' },
        { text: 'Prior domain knowledge of manufacturing processes is not a prerequisite for this role.' },
      ],
    },
    {
      heading: 'What we offer',
      kind: 'list',
      body: [
        { text: 'Direct ownership of a product line, with regular access to company leadership.' },
        { text: 'Broad exposure across product, engineering, customers, and commercial functions.' },
        { text: 'Structured domain training; industry knowledge is developed on the job.' },
        { text: 'Compensation commensurate with experience and qualifications.' },
      ],
    },
    {
      heading: 'How we work',
      kind: 'prose',
      body: [
        'Reporting to the Founder, you sit between the customer and the engineering team, and you own both ends of that conversation: what the customer actually needs, and whether what we built meets it. The job is turning fuzzy business needs into specifications engineers can build, and holding delivery to acceptance criteria you defined up front.',
        'MonoEdge speaks the way a reliable colleague would — calm, direct, and never overselling itself. We would rather be understood than admired, and that discipline shows up in how we write a requirement as much as in how we talk to a customer.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'Two customers each want a different feature next, and engineering has capacity for only one this cycle. How do you decide?',
      options: [
        { id: 'A', text: 'Build for whichever customer asked most insistently' },
        {
          id: 'B',
          text: 'Weigh each against customer value and business impact — including how many other customers it helps — and decide on that basis',
        },
        { id: 'C', text: 'Split the capacity and deliver half of each' },
        { id: 'D', text: 'Escalate both to the Founder without a recommendation' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'A plant manager says, "the reports just aren\'t useful." What do you do before writing anything for engineering?',
      options: [
        { id: 'A', text: 'Ask engineering to redesign the reports and see if that helps' },
        {
          id: 'B',
          text: 'Sit with the manager to understand which decision the report should support and what "useful" means, then write a spec with clear acceptance criteria',
        },
        { id: 'C', text: 'Add more charts to the report so there is something for everyone' },
        { id: 'D', text: 'Note it as low priority since the request is vague' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'Engineering delivers a feature that matches the ticket exactly, but it does not actually solve the customer\'s problem. Where is the failure most likely to be?',
      options: [
        { id: 'A', text: 'With engineering — they should have understood the real need' },
        {
          id: 'C',
          text: 'In the requirement and acceptance criteria — they captured the request but not the outcome; the fix is to define "done" against the customer\'s problem next time',
        },
        { id: 'B', text: 'With the customer, for not describing it well enough' },
        { id: 'D', text: 'Nowhere — the ticket was met, so the work is complete' },
      ],
    },
  ],

  written: {
    brief:
      'One question, and the part of the application we read most closely. We would rather see one requirement handled well than a long list of features shipped.',
    prompt:
      "Tell us about a time you turned a vague business need into something engineering could build. How did you validate you'd understood it, and how did you define 'done'?",
    hint: 'A few hundred words at most. Be specific about how you wrote the acceptance criteria and what you learned at delivery.',
    maxLength: 2000,
  },
};
