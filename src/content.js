// All the words on the site live here — edit this file to update copy, links and projects.
import dashboard from './assets/work/dashboard.webp'
import emptyState from './assets/work/empty-state.webp'
import coffee from './assets/work/coffee.webp'
import booking from './assets/work/booking.webp'
import appointment from './assets/work/appointment.webp'

export const profile = {
  name: 'Rachel Regnell',
  role: 'UX/UI & Product Designer',
  intro:
    "I'm a UX/UI design student transitioning into tech with a background in hospitality, operations, and business management.",
  // TODO: fill these in — empty values are hidden on the site.
  email: '',
  linkedin: '',
  resume: '',
}

export const skills = [
  'User research',
  'Wireframing',
  'Prototyping',
  'Visual design',
  'Accessibility',
  'Interaction design',
  'Mobile & desktop UI',
  'Error & empty states',
  'Figma',
]

export const projects = [
  {
    id: 'dashboard',
    title: 'Financial Dashboard',
    platform: 'Desktop',
    image: dashboard,
    color: 'var(--purple)',
    tags: ['Data viz', 'Dashboard'],
    summary:
      'A desktop financial dashboard designed to present complex data clearly and support informed decision-making.',
    highlights: [
      'A friendly "this week at a glance" summary up front',
      'Progress bars that make budgets and savings goals easy to read',
      'Encouraging microcopy — "Nice! You\'re within budget"',
    ],
  },
  {
    id: 'coffee',
    title: 'Coffee Checkout',
    platform: 'iOS',
    image: coffee,
    color: 'var(--orange)',
    tags: ['E-commerce', 'Mobile'],
    summary:
      'An iOS checkout screen designed to streamline purchases and reduce friction at the point of payment.',
    highlights: [
      'Inline quantity steppers — no separate cart screen',
      'Clear cost breakdown before the big button',
      'One obvious primary action: Place Order',
    ],
  },
  {
    id: 'booking',
    title: 'Booking Failure State',
    platform: 'Mobile',
    image: booking,
    color: 'var(--pink)',
    tags: ['Error state', 'Mobile web'],
    summary:
      'A mobile massage-booking failure state designed to clearly explain errors and guide users toward successful completion.',
    highlights: [
      'Plain-language explanation of what went wrong',
      'Reassurance at the moment of worry — "No charges were made."',
      'Clear recovery paths: Try Again or Contact Support',
    ],
  },
  {
    id: 'appointment',
    title: 'Appointment Confirmation',
    platform: 'Mobile',
    image: appointment,
    color: 'var(--teal)',
    tags: ['Healthcare', 'Mobile'],
    summary:
      "A doctor's appointment confirmation screen designed to clearly communicate visit details and reduce pre-appointment uncertainty.",
    highlights: [
      'Who, when and where grouped into one scannable card',
      'Services listed up front so there are no surprises',
      'Confirm, reschedule and cancel, color-coded by intent',
    ],
  },
  {
    id: 'empty-state',
    title: 'Pulse Empty State',
    platform: 'Desktop',
    image: emptyState,
    color: 'var(--yellow)',
    tags: ['Empty state', 'Dashboard'],
    summary:
      'A desktop financial dashboard empty state designed to explain the absence of data and support informed action.',
    highlights: [
      'Bold "Insights start here" moment instead of a blank screen',
      'Directional chevrons that point people toward their next step',
      'Simple icon navigation that stays out of the way',
    ],
  },
]

export const goals = [
  'Design clear, user-centered digital experiences',
  'Transition into a UX/UI or product-focused role',
  'Apply real-world operational thinking to design decisions',
  'Build practical, research-informed solutions',
  'Keep growing in accessibility and interaction design',
]
