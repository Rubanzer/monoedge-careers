import type { Role } from './types';

export const dataScientist: Role = {
  slug: 'data-scientist-4b9e26',
  id: 'DATA-SCI',
  title: 'Senior Data Scientist',
  eyebrow: 'Role 02 · Analytics',
  location: 'Pune, with travel to manufacturing sites across India',
  employment: 'Full-time · on-site / hybrid',
  reportsTo: 'Founder',
  travel: 'Regular, to partner plants',
  summary:
    'Own the analytical spine at MonoEdge — yield and quality models built on real industrial data, defensible in rupees.',
  signal: 'timeseries',

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
      heading: "What you'll work on",
      kind: 'list',
      body: [
        {
          lead: 'Yield, quality, and OEE modeling',
          text: '— connecting upstream process data to downstream outcomes (rejects, downgrades, throughput, energy).',
        },
        {
          lead: 'Industrial time-series analysis',
          text: '— PLC streams at 10–100 Hz, lab data at hour or shift frequency, ERP data at day frequency. Making them queryable and analytically joinable.',
        },
        {
          lead: 'Causal inference on observational data',
          text: '— most decisions in a plant happen without an A/B framework. Designing analyses that survive confounding, drift, and operator override.',
        },
        {
          lead: 'Ground-truth design and experimental design',
          text: '— generating labels where none exist, getting expert judgment efficiently, and validating models in production.',
        },
        {
          lead: 'ROI quantification',
          text: '— every model output must be defensible in rupees. You will own that defensibility.',
        },
        {
          lead: 'Cross-domain analytics',
          text: '— the platform connects production data with sales, procurement, inventory, and finance. You will help shape how these are joined and what insights they unlock together.',
        },
      ],
    },
    {
      heading: "What you'll do",
      kind: 'list',
      body: [
        {
          text: 'Own the data architecture for the core wedge product: schema design, ingestion, joining heterogeneous sources, labelling protocol.',
        },
        {
          text: 'Run domain workshops with plant QC and operations managers to translate their tacit knowledge into a labelable, modelable schema.',
        },
        {
          text: 'Build and validate the core decision model that sits on top of perception features from the CV pipeline.',
        },
        {
          text: 'Design the ground-truth collection — including operator judgment elicitation — and the validation framework for advisory and, later, closed-loop deployment.',
        },
      ],
    },
    {
      heading: 'What you bring',
      kind: 'list',
      body: [
        {
          lead: '4+ years of data science experience',
          text: 'with at least 2 years working with industrial or operational data — manufacturing, energy, logistics, supply chain. Not consumer or web product analytics.',
        },
        {
          lead: 'Strong applied statistics:',
          text: "regression, hypothesis testing, experimental design, confound handling, working with observational data. You can defend a model's claim in front of a sceptical operator.",
        },
        {
          lead: 'Strong Python:',
          text: 'pandas, scikit-learn, statsmodels, plotting libraries. Comfortable in SQL. Can structure a real codebase, not just notebooks.',
        },
        {
          lead: 'Cost-benefit thinking:',
          text: "you know when a 92% model that ships beats a 96% model that doesn't. You think about decision quality, not metric quality.",
        },
        {
          lead: 'Comfort with messy data:',
          text: 'missing values, inconsistent units, undocumented sources, partial coverage. You fix it patiently rather than complain about it.',
        },
        {
          lead: 'Plant-floor empathy:',
          text: 'you are willing to spend a week in a manufacturing plant, talking to a shift supervisor in Hindi or Marathi, to understand what the data actually means before you model it.',
        },
      ],
    },
    {
      heading: 'Nice to have',
      kind: 'list',
      body: [
        {
          text: 'Causal inference toolkit: DAGs, propensity scoring, instrumental variables, difference-in-differences.',
        },
        {
          text: 'Time-series at industrial frequencies: PLC data, sensor streams, alignment, resampling, drift handling.',
        },
        {
          text: 'Familiarity with manufacturing concepts: yield, OEE, first-time-right, kWh/MT, throughput, ageing inventory, working capital.',
        },
        {
          text: 'Experience working alongside computer vision pipelines, taking perception outputs into downstream models.',
        },
      ],
    },
    {
      heading: 'How we work',
      kind: 'prose',
      body: [
        'Reporting to the Founder, you will steward the analytical and statistical framework of the platform. You are expected to design robust solutions, provide critical technical oversight, and maintain ownership of both core and exploratory analytics to drive the organization’s strategic spine.',
        'We operate with agility and a rigorous focus on EBITDA-level impact. Our performance is validated by real-world financial improvements rather than isolated metric performance.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'Six months of plant data shows that batches run at higher furnace temperature have noticeably fewer rejects. The plant head asks whether to raise the setpoint. What do you say?',
      options: [
        { id: 'A', text: 'Yes — the association is consistent across six months of production' },
        {
          id: 'B',
          text: 'Not yet. Operators may already raise the temperature when the input material looks good, which would explain both',
        },
        { id: 'C', text: 'Yes, provided the correlation is significant at p < 0.05' },
        { id: 'D', text: 'No — observational data cannot support any operational recommendation' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'Your quality model has been live for a month. The shift supervisors override about 40% of its alerts. What do you do first?',
      options: [
        { id: 'A', text: 'Retrain on more features to push accuracy higher' },
        { id: 'B', text: 'Raise the alert threshold so only high-confidence alerts reach the floor' },
        { id: 'C', text: 'Sit with the supervisors and go through the overridden cases one by one' },
        { id: 'D', text: 'Report model accuracy as measured and treat overrides as user error' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'You need to join PLC data at 50 Hz, lab results at shift frequency, and ERP records at day frequency for a yield model. How do you approach it?',
      options: [
        { id: 'A', text: 'Interpolate the lab and ERP data up to 50 Hz so everything shares one index' },
        { id: 'B', text: 'Average everything to daily figures, which is the coarsest source available' },
        {
          id: 'C',
          text: 'Aggregate to the granularity the decision is actually made at, handling process lag and shift boundaries explicitly',
        },
        { id: 'D', text: 'Model each source separately and combine the predictions at the end' },
      ],
    },
  ],

  written: {
    brief:
      'One question, and the part of the application we read most closely. We care about how you defended the claim, not the size of the number.',
    prompt:
      'Tell us about a model or analysis you shipped where the business impact was measurable. What was the number, and how did you establish it was real?',
    hint: 'A few hundred words at most. Include what you could not rule out.',
    maxLength: 2000,
  },
};
