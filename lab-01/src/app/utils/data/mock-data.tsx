import {
  ICardInfo,
  IFeatureCard,
  IFeatureTitleSection,
  INavbarRoute,
} from '../interface/interfaces'
import { CalendarIcon, CodeIcon, NextJSIcon } from '../icons/icons'

export const infoCard: ICardInfo[] = [
  {
    title: 'Reports',
    subtitle: 'Tables & Info Display',
    description:
      'Focus on Component usage in Tables and Related information display, Just click below to visit the section.',
    link: '/reports',
  },
  {
    title: 'Reservations',
    subtitle: 'Booking events & related features',
    description:
      'Dispalying components to manage booking systems and reserve events, Just click below to visit the section.',
    link: '/reservations',
  },
  {
    title: 'Backoffice',
    subtitle: 'Manage Organizational Info',
    description:
      'Display big amounts of data about a company in an organized manner, Just click below to visit the section.',
    link: '/backoffice',
  },
]

export const navbarRoutes: INavbarRoute[] = [
  { route: '/reservations', title: 'Reservations' },
  { route: '/reports', title: 'Reports' },
  { route: '/backoffice', title: 'Backoffice' },
  { route: '/calendar', title: 'Calendar' },
]

export const homeFeatureCards: IFeatureCard[] = [
  {
    title: 'Calendar',
    description:
      'A simple calendar application with a lot of modern features. Heavy emphasis on Unit Testing to guarantee code quality.',
    icon: <CalendarIcon customClass="w-6 h-6 text-white" stroke={1.5} />,
  },
  {
    title: 'Reservation',
    description:
      'A small bookings app, to prototype a small reservations system. We dont forget Unit Testing.',
    icon: <CodeIcon customClass="w-6 h-6 text-white" stroke={1.5} />,
  },
]

export const homeTitleSection: IFeatureTitleSection = {
  title: 'An awesome ReactJS + NextJS + Tailwind UI Workshop',
  subtitle: 'Welcome to Lab 01',
  description:
    'Take a look at the amazing capabilities and flexilibity of ReactJS + NextJS. Powerful and simple CSS classes generated by Tailwind UI. Splitted into several functional componets React Testing Library as a Guidebook on first class testing work.',
  icon: <NextJSIcon customClass="h-24 w-24 inline-block" />,
}
