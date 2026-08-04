import type { Role } from './types';

// Adapted from the MonoEdge "Product Owner – Signal Analytics" JD (2–4 yrs).
export const productOwnerSignalAnalytics: Role = {
  slug: 'product-owner-signal-analytics-2d9f4a',
  id: 'PO-SIGNAL',
  title: 'Product Owner — Signal Analytics',
  eyebrow: 'Role 07 · Product',
  location: 'Pune, Maharashtra, with occasional travel to customer sites',
  employment: 'Full-time · permanent',
  reportsTo: 'Founder',
  travel: 'Occasional, to customer sites',
  summary:
    "Own the delivery of MonoEdge's signal-analytics product — turning high-frequency plant data into early warning, deployed to a repeatable standard across customer sites.",
  signal: 'waveform',
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
        "MonoEdge's signal-analytics solutions convert high-frequency sensor and process data from industrial plants into early warning and process improvement.",
        'As Product Owner for Signal Analytics, you are responsible for the definition, delivery, and standardisation of these solutions across customer engagements — and accountable for establishing a repeatable delivery process supported by clear quality standards.',
      ],
    },
    {
      heading: "What you'll own",
      kind: 'list',
      body: [
        {
          lead: 'Deployment scope',
          text: '— define the scope of each customer deployment, including the outcomes committed to and those expressly excluded.',
        },
        {
          lead: 'Quality standards',
          text: '— establish and enforce standards for data quality and solution performance, and validate deployments against them.',
        },
        {
          lead: 'A repeatable delivery process',
          text: '— develop and maintain a standardised onboarding and delivery process for new customer sites, so the next deployment is faster than the last.',
        },
        {
          lead: 'Specifications',
          text: '— translate customer operating requirements into structured specifications for the engineering team.',
        },
        {
          lead: 'Delivery coordination',
          text: '— coordinate across internal teams and external technical partners, reviewing deliverables against agreed acceptance criteria.',
        },
        {
          lead: 'The roadmap loop',
          text: '— consolidate findings from live deployments into the product roadmap, and maintain deployment documentation, configuration records, and handover material for customer teams.',
        },
      ],
    },
    {
      heading: 'What you bring',
      kind: 'list',
      body: [
        {
          lead: "A bachelor's degree in engineering",
          text: '— electrical, electronics, instrumentation, mechanical, or computer science, or a related discipline.',
        },
        {
          lead: '2–4 years of relevant experience',
          text: 'in product ownership, technical programme management, solution delivery, or an engineering role.',
        },
        {
          lead: 'A working understanding of sensor and time-series data',
          text: 'and its application in monitoring or analytics systems.',
        },
        {
          lead: 'Familiarity with industrial data sources and plant systems,',
          text: 'or the demonstrated ability to acquire it quickly.',
        },
        {
          lead: 'A structured approach',
          text: 'to documentation and stakeholder communication.',
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
        { text: 'A background in industrial automation, industrial IoT, process control, or data-platform delivery.' },
        { text: 'Experience coordinating delivery with external technical or research partners.' },
        { text: 'Hands-on model development is not a requirement of this role.' },
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
        'Reporting to the Founder, you own a product line end to end — from what we commit to a customer, through delivery, to the standard we hold it to. This is a role for someone who brings order: clear scope, clear acceptance criteria, and a process that makes the tenth deployment calmer than the first.',
        'MonoEdge speaks the way a reliable colleague would — calm, direct, and never overselling itself. We would rather be understood than admired, and we would rather tell a customer plainly what a deployment will and will not do than promise everything.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'A prospective customer says they want the system to "predict every failure before it happens." How do you scope the first deployment?',
      options: [
        { id: 'A', text: 'Commit to it — an ambitious promise is what wins the deal' },
        {
          id: 'B',
          text: 'Define a small set of specific, measurable outcomes the system will deliver, and write down what is explicitly out of scope for this deployment',
        },
        { id: 'C', text: 'Agree in principle and let engineering work out what is feasible later' },
        { id: 'D', text: 'Decline until the customer can specify every failure mode themselves' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'A deployment is due to be signed off, but you notice one sensor feed is intermittently dropping samples. The models still look fine on the demo data. What do you do?',
      options: [
        { id: 'A', text: 'Sign off — the demo looks good and the customer is waiting' },
        { id: 'B', text: 'Sign off but add a note in the handover document' },
        {
          id: 'C',
          text: 'Hold sign-off until the feed meets the data-quality standard, because acceptance is against the standard, not the demo',
        },
        { id: 'D', text: 'Remove that sensor from the solution so the issue disappears' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'Your third customer deployment took just as long as the first. What is the most important thing to fix?',
      options: [
        { id: 'A', text: 'Add more engineers to the next deployment' },
        {
          id: 'C',
          text: 'Standardise the onboarding and delivery process — capture what is repeatable so each site starts further ahead than the last',
        },
        { id: 'B', text: 'Accept that every plant is unique and deployments will not get faster' },
        { id: 'D', text: 'Lengthen the timeline you quote customers so it feels on schedule' },
      ],
    },
  ],

  written: {
    brief:
      'One question, and the part of the application we read most closely. We care about how you brought order to it, not the size of the project.',
    prompt:
      'Tell us about a technical product or deployment you owned end to end. What did you commit to, what did you deliberately keep out of scope, and how did you know it was done?',
    hint: 'A few hundred words at most. Be specific about the acceptance criteria and what you standardised for next time.',
    maxLength: 2000,
  },
};
