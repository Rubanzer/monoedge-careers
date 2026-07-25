import type { Role } from './types';

export const computerVisionEngineer: Role = {
  slug: 'computer-vision-engineer-7f3ac1',
  id: 'CV-ENG',
  title: 'Senior Computer Vision Engineer',
  eyebrow: 'Role 01 · Engineering',
  location: 'Pune, with travel to manufacturing sites across India',
  employment: 'Full-time · on-site / hybrid',
  reportsTo: 'Founder',
  travel: 'Regular, to partner plants',
  summary:
    'Own the computer vision stack at MonoEdge — cameras, datasets, and models deployed on live production lines.',
  signal: 'calibration',

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
          lead: 'Defect detection and surface inspection',
          text: 'on production lines: classifying, localising, and characterising material defects from imagery.',
        },
        {
          lead: 'Geometric measurement and dimensional analysis',
          text: 'of moving parts and continuous processes.',
        },
        {
          lead: 'Multi-camera systems',
          text: 'for production lines: camera selection, lensing, lighting, mounting, calibration, and synchronization with PLC-driven processes.',
        },
        {
          lead: 'Model development',
          text: '— segmentation, detection, classification — trained from datasets you will help create and curate from scratch.',
        },
      ],
    },
    {
      heading: "What you'll do",
      kind: 'list',
      body: [
        {
          text: 'Specify and deploy camera and capture infrastructure at our first partner plant. Hands-on, industrial, not a desk job.',
        },
        {
          text: 'Build datasets from scratch: capture, label, version, manage. Define what "good labels" mean for an industrial problem where no public dataset exists.',
        },
        {
          text: 'Build and train perception models (segmentation, detection, classification) and iterate them based on production validation.',
        },
        {
          text: 'Partner with the data scientist on the team to connect perception outputs into downstream decision models.',
        },
        {
          text: 'Productize the capture and inference stack so plant N+1 deploys in weeks, not months.',
        },
        {
          text: 'Take systems from offline / advisory mode into real-time, edge-deployed, closed-loop integration with plant PLCs.',
        },
      ],
    },
    {
      heading: 'What you bring',
      kind: 'list',
      body: [
        {
          lead: '4+ years of computer vision experience',
          text: 'with at least 2 years building production systems — shipped code, not just research notebooks.',
        },
        {
          lead: 'Deep learning fundamentals:',
          text: 'CNNs, segmentation (UNet, Mask R-CNN, and similar), object detection, classification. PyTorch preferred. Comfortable training from scratch and fine-tuning pretrained backbones.',
        },
        {
          lead: 'Classical CV:',
          text: "OpenCV, geometric calibration, multi-camera setups, lighting design. You don't reach for a neural network when a Hough transform will do.",
        },
        {
          lead: 'Production deployment experience:',
          text: 'edge devices, real-time inference, latency optimization, model quantization.',
        },
        {
          lead: 'Industrial camera experience:',
          text: 'Basler, FLIR, Hikrobot, or similar. Comfortable with GigE / USB3 Vision, exposure and gain tuning, lens selection.',
        },
        {
          lead: 'Strong Python:',
          text: 'clean code, version control, testing, packaging. Can ship to a small team without supervision.',
        },
        {
          lead: 'Pragmatism about data:',
          text: 'you know that 80% of CV work is data, and you have the patience and discipline for it.',
        },
      ],
    },
    {
      heading: 'Nice to have',
      kind: 'list',
      body: [
        {
          text: 'Industrial or manufacturing CV exposure — quality inspection, defect detection, process monitoring, robotics.',
        },
        { text: 'Edge deployment stacks: NVIDIA Jetson + TensorRT, OpenVINO, ONNX Runtime.' },
        {
          text: "PLC / automation awareness — you don't need to write ladder logic, but knowing what OPC UA / Modbus tags are, and how to integrate with them, helps.",
        },
        { text: 'Thermal or near-IR imaging experience.' },
        { text: 'Experience designing capture systems for hot, dusty, or otherwise hostile environments.' },
      ],
    },
    {
      heading: 'How we work',
      kind: 'prose',
      body: [
        'Working directly with the technical Founder, you will maintain end-to-end ownership of the computer vision stack. This position demands a senior professional capable of making high-level architectural decisions, selecting optimal model frameworks, and managing complex technical trade-offs with full autonomy.',
        'Our culture prioritizes efficiency, direct communication, and tangible operational outcomes. We define success through measurable plant-floor improvements, such as yield optimization and significant cost reduction, ensuring our technical solutions deliver clear business value.',
      ],
    },
  ],

  screening: [
    {
      id: 'q1',
      kind: 'choice',
      question:
        'You need to detect hairline surface cracks on a steel strip moving at 2 m/s. The cracks are shallow and barely change the surface colour. Which capture setup do you try first?',
      options: [
        { id: 'A', text: 'A bright on-axis ring light, and raise the exposure until the cracks are visible' },
        { id: 'B', text: 'Low-angle grazing illumination so the crack casts a shadow against the surface' },
        { id: 'C', text: 'The same lighting, but a higher-resolution sensor and a larger model' },
        { id: 'D', text: 'A colour camera with white balance tuned to the steel' },
      ],
    },
    {
      id: 'q2',
      kind: 'choice',
      question:
        'Your defect model scores 96% mAP on your held-out test set. Deployed on the line, it catches roughly 60% of what QC catches. What do you do first?',
      options: [
        { id: 'A', text: 'Train a larger backbone and add heavier augmentation' },
        { id: 'B', text: 'Raise the confidence threshold to cut the false positives' },
        {
          id: 'C',
          text: 'Capture and label a fresh set from the running line, and compare it against your training distribution',
        },
        { id: 'D', text: 'Report the offline number and flag the line as a data quality problem' },
      ],
    },
    {
      id: 'q3',
      kind: 'choice',
      question:
        'Inference has to fit a 40 ms budget on a Jetson at the line. Your current model takes 110 ms. What is your first move?',
      options: [
        { id: 'A', text: 'Quantize, export to TensorRT, and crop inference to the region that matters' },
        { id: 'B', text: 'Move inference to a server in the office and send frames over the plant network' },
        { id: 'C', text: 'Drop to every third frame and accept the missed parts' },
        { id: 'D', text: 'Request a larger GPU at the edge before changing the model' },
      ],
    },
    {
      id: 'q4',
      kind: 'text',
      question:
        'Describe one computer vision system you took into production. What was the hardest part — and was it the model, the data, or the hardware?',
      hint: 'A few sentences is enough. Specifics matter more than length.',
      maxLength: 900,
    },
  ],

  voice: {
    brief:
      'Read the paragraph below exactly as written. We are listening for clarity and pace — this is how you would explain a system to a plant manager.',
    paragraph: [
      'Good morning. I want to walk you through what the camera on line three is actually doing, in plain terms.',
      'It takes about forty frames a second as the strip passes underneath. For each frame, the model marks anything that looks like a surface defect and records where it sat on the coil.',
      'It will not catch everything yet. Right now it agrees with your QC team about eight times out of ten, and we log every disagreement so we can close that gap.',
    ],
  },
};
