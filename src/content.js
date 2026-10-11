// All the words and images on the site live here — edit this file to update copy, links and projects.
import freshSketch from './assets/projects/fresh-start-sketch.webp'
import freshWire from './assets/projects/fresh-start-wireframe.webp'
import freshFinal from './assets/projects/fresh-start-final.webp'
import ondusMenus from './assets/projects/ondus-menus.webp'
import ondusCards from './assets/projects/ondus-guest-cards.webp'
import ondusPortal from './assets/projects/ondus-staff-portal.webp'
import bonitaKit from './assets/projects/bonita-brand-kit.webp'
import bonitaLogo from './assets/projects/bonita-logo.webp'
import bonitaHome from './assets/projects/bonita-homepage.webp'
import scioTile from './assets/projects/scio-gro-style-tile.webp'
import scioWire from './assets/projects/scio-gro-wireframes.webp'
import scioHome from './assets/projects/scio-gro-home.webp'
import scioPantry from './assets/projects/scio-gro-pantry.webp'
import scioRecipes from './assets/projects/scio-gro-recipes.webp'
import siteGrandpa from './assets/projects/site-grandpa-resume.webp'
import siteV1 from './assets/projects/site-iteration-1.webp'
import siteV2 from './assets/projects/site-iteration-2.webp'

export const INK = '#14110F'

export const links = {
  // Empty values fall back to scrolling to the contact section.
  email: 'design@rachelregnell.com',
  linkedin: 'https://www.linkedin.com/in/rachel-regnell/',
  // Files in public/ are served next to the page; BASE_URL keeps the path right on GitHub Pages.
  resume: `${import.meta.env.BASE_URL}Rachel_Regnell_Resume.pdf`,
  site: 'https://rr.design',
}

export const process = ['Sketch', 'Mockup', 'Test', 'Iterate', 'Result', 'Refine', 'Launch']

// Each project has four steps. Steps 0-2 show a visual; step 3 is the big result card.
// visual.kind: 'image' (single image), 'browser' (image in a browser frame), 'phones' (fanned phone screens)
export const projects = [
  {
    name: 'Fresh Start',
    color: '#2B50FF',
    fg: '#FFFFFF',
    defaultStep: 2,
    tags: 'UX Research + Team Collaboration + Design + Real Stakeholders',
    hook: 'Internship at Western Governors University: a momentum and pacing dashboard so students can see if they are on track.',
    steps: [
      { label: '01 Sketch', caption: 'Sketch. A companion that grows with the student: a tree, then a hatchling, then an owl in its nest.', visual: { kind: 'image', src: freshSketch, alt: 'Hand sketch of a companion that grows in three stages: a tree, a hatchling, then an owl in a nest' } },
      { label: '02 Wireframe', caption: 'Wireframe. The dashboard layout in grayscale: next step, pacing status, momentum, and support.', visual: { kind: 'image', src: freshWire, width: '58%', alt: 'Grayscale wireframe of the student dashboard: next step, pacing status, momentum, and support buttons' } },
      { label: '03 Final design', caption: 'Final screens. The dashboard home, then the two objective screens: pacing status and momentum status. Feedback was that it used too much color, so the next pass mellows the palette and saves color for the calls to action.', visual: { kind: 'image', src: freshFinal, alt: 'Three final screens: the dashboard home with an owl guide, the pacing status breakdown, and the momentum status with a weekly streak' } },
      { label: '04 Result', caption: 'Result. The V2 direction, adopted after testing with 10 participants.' },
    ],
    result: { big: 'V2', small: 'Adopted as the V2 direction after testing with 10 participants.' },
    story: {
      problem: "WGU's mobile app gave students no visibility into whether they were on pace, so disengagement often went unnoticed until it was too late.",
      approach: 'Led research and usability testing with 10 Maze participants across three momentum-indicator variants. On a 3-person team, I owned the dashboard home and indicator variants.',
      approachChips: ['10 Maze participants', '3 indicator variants', '3-person team', 'Owned dashboard home'],
      result: 'A 4-state momentum system (Ahead / On Track / Fading / Behind), paired with a 2-state pacing indicator, was validated through testing and adopted as the V2 direction.',
      resultChips: ['4-state momentum system', '2-state pacing indicator', 'Adopted as V2'],
      more: 'Build the full gamification layer: a companion mascot concept that was scoped but never prototyped.',
      todo: ['Mellow the palette and reserve color for the calls to action', 'Build the full gamification layer', 'Prototype the companion mascot concept'],
    },
  },
  {
    name: 'Ondus on the Waterfront',
    color: '#FF6B2C',
    fg: INK,
    tags: 'UX Research + Design + Real Stakeholders + Cross-Functional Collaboration',
    hook: 'Employee experience and guest experience design: a staff portal for the team and a QR feedback loop for guests.',
    steps: [
      { label: '01 Print menus', caption: 'Menu redesign: from a generic centered template to a cohesive coastal print system. Lunch and dinner share one system in different colorways.', visual: { kind: 'image', src: ondusMenus, alt: 'Ondus on the Waterfront before and after: the old plain dinner menu next to the new lunch and dinner menus on a coastal shell pattern' } },
      { label: '02 Guest touchpoints', caption: 'Guest feedback: a QR touchpoint designed to drive TripAdvisor reviews, next to a branded discount card.', visual: { kind: 'image', src: ondusCards, alt: 'Ondus QR feedback card and 10% off discount card' } },
      { label: '03 Staff portal', caption: 'The staff portal: a weekly scheduling view with role-based access, shift status, and hours tracking, plus a shift pickup board where open shifts are claimed in real time.', visual: { kind: 'image', src: ondusPortal, alt: 'Ondus staff portal weekly schedule with staff names hidden, and the shift pickup board' } },
      { label: '04 Result', caption: 'Result. What changed because it shipped.' },
    ],
    result: { big: '18', small: 'new TripAdvisor reviews and a 5-star rating shift in two weeks.' },
    story: {
      problem: 'Staff had no central system for scheduling, labor visibility, or communication, and guests had no fast way to surface issues before they became reviews.',
      approach: 'Built a full-stack staff portal for scheduling, labor cost calculation, and real-time chat. Designed a QR feedback loop and an allergen lookup tool for guests.',
      approachChips: ['Staff portal', 'Scheduling + labor cost', 'Real-time chat', 'QR feedback loop', 'Allergen lookup'],
      result: 'The QR feedback system drove 18 new TripAdvisor reviews and a 5-star rating shift in two weeks. The portal centralized scheduling and labor tracking for a 20-30 person team.',
      resultChips: ['18 new TripAdvisor reviews', '5-star rating shift', '20-30 person team'],
      more: 'Roll out full role-based permissions and complete onboarding for every staff member.',
      todo: ['Roll out full role-based permissions', 'Complete onboarding for every staff member'],
    },
  },
  {
    name: 'Bonita Paws',
    color: '#FF5FA2',
    fg: INK,
    tags: 'Brand + Web Design + Client Collaboration + Real Stakeholders',
    hook: 'Brand and web design from zero for a pet care business that was not visible or bookable anywhere.',
    steps: [
      { label: '01 Brand kit', caption: 'Brand kit. Hot pink, glamorous and fun, with a palette and type pairing that make grooming feel like a luxury.', visual: { kind: 'image', src: bonitaKit, alt: 'Bonita Paws brand kit: hot pink cover, seven-color palette, and Pacifico plus Lato type' } },
      { label: '02 Logo', caption: 'Logo. Two options for the owner to pick from, a playful chic mark with sparkles and a paw in the lettering.', visual: { kind: 'image', src: bonitaLogo, alt: 'Two Bonita Paws logo options, hot pink and blush, with sparkles' } },
      { label: '03 Final site', caption: 'Final design. The homepage: a bold pink brand, a clear promise, and a Book a Grooming button above the fold.', visual: { kind: 'browser', src: bonitaHome, alt: 'Bonita Paws homepage: Glamour. Care. Right at Your Door, with a Book a Grooming button' } },
      { label: '04 Handoff', caption: 'Result. A clean handoff: the brand kit, logo options, and site design delivered to the owner.' },
    ],
    result: { big: 'Handoff', small: 'Brand kit, logo options, and a launch-ready site design, handed off to the owner.' },
    story: {
      problem: "The client had no website, no social presence, and no cohesive brand: a company that existed but wasn't visible or bookable anywhere.",
      approach: 'Designed and built a launch-ready website plus a social content plan from a blank slate, shaping the voice, structure, and identity from scratch.',
      approachChips: ['Launch-ready website', 'Social content plan', 'Voice + identity from scratch'],
      result: 'Delivered the brand kit, logo options, and a launch-ready site design, then handed it off to the owner. The client went quiet after the handoff, so there is no launch data to show.',
      resultChips: ['Brand kit delivered', 'Site design handed off'],
      more: 'Set up analytics and booking tracking, then iterate the social plan from real engagement data.',
      todo: ['Set up analytics and booking tracking', 'Iterate the social plan from real engagement data'],
    },
  },
  {
    name: 'Scio-gro',
    color: '#19C37D',
    fg: INK,
    defaultStep: 2,
    tags: 'UX Research + End-to-End Design + Prototyping',
    hook: 'AgTech, UX research, and Figma: a pantry-first recipe app for people who want to cook with what they already have.',
    steps: [
      { label: '01 Style tile', caption: 'Style tile. Palette, type, and component states settled before the screens.', visual: { kind: 'image', src: scioTile, alt: 'Scio-gro style tile with palette, type, and component states' } },
      { label: '02 Wireframes', caption: 'Wireframes, before and after the revision pass.', visual: { kind: 'image', src: scioWire, alt: 'Scio-gro wireframes, before and after the revision pass' } },
      {
        label: '03 Final screens',
        caption: 'Final screens. Pantry first: recipes matched to what is already in the kitchen.',
        visual: {
          kind: 'phones',
          phones: [
            { src: scioHome, alt: 'Scio-gro home screen with filters and trending recipes' },
            { src: scioPantry, alt: 'Scio-gro pantry screen showing items on hand' },
            { src: scioRecipes, alt: 'Scio-gro recipes list matched to the pantry' },
          ],
        },
      },
      { label: '04 Result', caption: 'Result. What changed because it shipped.' },
    ],
    result: { big: 'Award', small: 'Won a WGU Excellence Award for Prototyping.' },
    story: {
      problem: "People throw away food because they don't know what to make with what they already have; existing recipe apps assume a grocery list, not a pantry.",
      approach: 'Led the full end-to-end UX process solo: research, ideation, wireframes, and a high-fidelity Figma prototype centered on pantry-based recipe matching.',
      approachChips: ['Solo, end to end', 'Research', 'Ideation', 'Wireframes', 'Hi-fi Figma prototype'],
      result: 'Won a WGU Excellence Award for Prototyping.',
      resultChips: ['WGU Excellence Award', 'Prototyping'],
      more: "Add barcode and receipt scanning for pantry input, plus a 'use it before it expires' sort to nudge waste reduction.",
      todo: ['Add barcode and receipt scanning for pantry input', "Add a 'use it before it expires' sort to nudge waste reduction"],
    },
  },
  {
    name: 'rachelregnell.com',
    color: '#FFD23F',
    fg: INK,
    tags: 'Personal Brand + Front-End + AWS Hosting + Always Iterating',
    hook: 'The history of this site: a portfolio named in homage to my grandfather, who had an online resume from the very start.',
    steps: [
      { label: '01 The inspiration', caption: "Where it started: my grandfather's online resume. Simple, but he had one from the jump.", visual: { kind: 'image', src: siteGrandpa, alt: "My grandfather's online resume at his own domain: a plain text page with his experience and education, contact details blurred" } },
      { label: '02 Iteration 1', caption: 'Iteration 1 (2025 to 2026): a retro teal-and-cream site, vibe coded with Claude and VS Code and hosted on AWS.', visual: { kind: 'image', src: siteV1, alt: 'Iteration 1 of the site: a retro teal and cream portfolio with a script display font, showing the hero, work list, about section, and contact page' } },
      { label: '03 Iteration 2', caption: "Iteration 2: the one you're looking at. Bold, bright, and animated with Framer Motion.", visual: { kind: 'image', src: siteV2, width: '62%', alt: 'Iteration 2, the current site, on a phone: bold blue and yellow name blocks, an Open to CX and GTM roles sticker, and the story picker' } },
      { label: '04 Result', caption: 'Result. Still growing, still in homage to him.' },
    ],
    result: { big: 'Live', small: 'A portfolio that keeps growing with my work.' },
    story: {
      problem: 'My grandfather had an online resume from the jump. It was very simple, but he had one long before it was common, and I wanted to carry that forward.',
      approach: "Iteration 1 (2025 to 2026): built rachelregnell.com from scratch in HTML and CSS, vibe coded with Claude and VS Code, hosted it on AWS, and kept reworking it with case studies, mobile fixes, and resume updates. Iteration 2: the one you're looking at, rebuilt bold and bright with React and Framer Motion.",
      approachChips: ['Vibe coded with Claude + VS Code', 'HTML + CSS from scratch', 'AWS S3 + CloudFront', 'Route 53 DNS', 'Case study pages', 'Mobile responsiveness', 'Framer Motion redesign'],
      result: 'A living portfolio that has grown from hand-coded pages into a redesigned experience, and keeps changing as my work does.',
      resultChips: ['Hand-built to Framer Motion', 'Case studies live', 'Always evolving'],
      more: 'Work on SEO, and keep adding case studies as the work grows.',
      todo: ['Work on SEO', 'Keep adding case studies as the work grows'],
    },
  },
]

export const gtmConcepts = [
  { num: '01', title: 'Journey teardown', color: '#2B50FF', body: 'One customer moment, from first login to first win, sketched as it is today and redrawn as it could be.' },
  { num: '02', title: 'Lifecycle playbook', color: '#FF5FA2', body: 'How buyer signals could shape what a customer hears at each stage, drawn as one simple visual system.' },
  { num: '03', title: 'Enablement kit', color: '#19C37D', body: 'The train-the-trainer program, turned into a guide a new team can run without me in the room.' },
]

// From the résumé, newest first. `highlights` show when a role is opened.
export const experience = [
  {
    role: 'Sales Development Representative',
    org: 'ZoomInfo',
    place: 'Vancouver, WA',
    dates: '2026 – Present',
    color: '#2B50FF',
    highlights: [
      'Run daily outbound prospecting against a 100-call-a-day target, using discovery questions to connect prospects with sales reps for demos',
      "Research accounts and buying signals in ZoomInfo's own platform, including Sales and GTM Studio",
      "Use AI tools, including ZoomInfo's Mesh and AI agents, as part of my daily prospecting workflow",
    ],
  },
  {
    role: 'Assistant Restaurant Manager',
    org: 'Ondus Restaurant & Bar · AC Hotels by Marriott',
    place: 'Vancouver, WA',
    dates: 'Mar 2026 – Oct 2026',
    color: '#FF6B2C',
    highlights: [
      "Led a team of 20-30 and ran the restaurant's social media",
      'Built and deployed a full web application (ondus.team) on AWS, with the site architecture, performance and an access-controlled backend, used daily by the team',
      'Redesigned the guest-facing site and menu experience and launched a QR-based feedback loop that brought in 18 new TripAdvisor reviews and a 5-star rating in two weeks',
      "Wrote a formal proposal to Vesta Hospitality Group's VP of Operations for a new Internal Systems Developer function, with a six-tool roadmap and business case",
    ],
  },
  {
    role: 'UX Design Intern',
    org: 'Western Governors University · Fresh Start project',
    dates: 'Jun – Aug 2026',
    color: '#FF5FA2',
    highlights: [
      'Worked on a 3-person team redesigning the mobile dashboard for at-risk students, owning the dashboard home and three momentum-indicator variants',
      'Ran usability testing with 10 participants in Maze, which shaped the V2 direction',
    ],
  },
  {
    role: 'Executive Pastry Chef',
    org: 'Ondus on the Waterfront · AC Hotels by Marriott',
    place: 'Vancouver, WA',
    dates: 'May 2022 – Mar 2026',
    color: '#19C37D',
    highlights: [
      'Led adoption of a new POS platform replacing a 4-year legacy system, and was the main trainer and point of contact for the full team through the change',
      'Designed and maintained a staff-facing digital reference tool used daily across the team, with the same structure and content discipline as a well-organized site',
    ],
  },
  {
    role: 'Freelance Web & Brand Designer',
    org: 'rr.design',
    place: 'Portland metro',
    dates: '2025 – Present',
    color: '#FFD23F',
    highlights: [
      'Bonita Paws Pet Care: designed the brand kit, logo options and a responsive website, then handed it off to the owner',
      'Own and maintain my portfolio site (rachelregnell.com) end to end, including hosting, custom domain and DNS, and ongoing content and performance updates',
    ],
  },
  {
    role: 'Finance Manager',
    org: 'Triple C Auto Brokers',
    place: 'Washougal, WA',
    dates: 'Nov 2021 – May 2022',
    color: '#2B50FF',
    highlights: ['Cut loan approval wait times in half by mapping the customer journey and removing process friction'],
  },
]

export const education = {
  degree: 'BS, User Experience Design',
  school: 'Western Governors University',
  when: 'Expected 2027',
  certs: [
    'Google UX Design: Foundations of UX (Jun 2025)',
    'Google UX Design: Wireframes & Low-Fi Prototypes (Aug 2025)',
    'WGU Certificate: Strategic Thinking and Innovation (Jul 2025)',
    'NSLS Member (Apr 2026)',
    'Notary Public',
  ],
}
