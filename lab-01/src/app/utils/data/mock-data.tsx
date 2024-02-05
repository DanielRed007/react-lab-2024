import {
  ICardInfo,
  IContactCardSmall,
  IFeatureCard,
  IFeatureTitleSection,
  ILabel,
  ILocation,
  INavbarRoute,
  IUser,
  IWorkModality,
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

export const locations: ILocation[] = [
  {
    name: 'Palatinum',
    city: 'Roma',
    default: true,
  },
  {
    name: 'Agora',
    city: 'Atenas',
    default: false,
  },
]

export const workModalities: IWorkModality[] = [
  {
    name: 'Full Remote',
  },
  {
    name: 'Hybrid',
  },
  {
    name: 'Full Presence',
  },
]

export const user: IUser = {
  name: 'Septimus',
  username: 'Gladius',
  email: 'septimus.scipium@aeterna.com',
}

export const mockDesks = [
  { id: 1, name: '1', value: '1' },
  { id: 2, name: '2', value: '2' },
  { id: 3, name: '3', value: '3' },
  { id: 4, name: '4', value: '4' },
  { id: 5, name: '5', value: '5' },
  { id: 6, name: '6', value: '6' },
  { id: 7, name: '7', value: '7' },
]

export const reportLabels: ILabel[] = [
  { name: 'Title' },
  { name: 'Author' },
  { name: 'Description' },
  { name: 'Published By' },
  { name: 'Year' },
]

export const reportsData = [
  {
    title: "Childhood's End",
    author: 'Arthur Clarke',
    description: 'Mankind facing its ultimate destiny',
    publishedBy: 'Dark Wing Editions',
    year: 1956,
  },
  {
    title: 'Ubik',
    author: 'Phillip Dick',
    description: 'Comedy and Dark Fantasy',
    publishedBy: 'Electric Sheep Editions',
    year: 1967,
  },
  {
    title: "Childhood's End",
    author: 'Arthur Clarke',
    description: 'Mankind facing its ultimate destiny',
    publishedBy: 'Dark Wing Editions',
    year: 1956,
  },
  {
    title: "Childhood's End",
    author: 'Arthur Clarke',
    description: 'Mankind facing its ultimate destiny',
    publishedBy: 'Dark Wing Editions',
    year: 1956,
  },
  {
    title: "Childhood's End",
    author: 'Arthur Clarke',
    description: 'Mankind facing its ultimate destiny',
    publishedBy: 'Dark Wing Editions',
    year: 1956,
  },
]

export const contactCardSmallData: IContactCardSmall[] = [
  {
    title: 'Title 1',
    subtitle: 'This is a simple rounded card using Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/150',
    contactEmail: 'axel@aeterna.et',
    contactName: 'Axel Aeterna',
    contactMobile: 'AXL-3421-878',
    chipText: 'light',
  },
  {
    title: 'Title 2',
    subtitle: 'This is a simple rounded card using Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/150',
    contactEmail: 'tea@aeterna.et',
    contactName: 'TEA Aeterna',
    contactMobile: 'TEA-8732-213',
    chipText: 'light',
  },
  {
    title: 'Title 3',
    subtitle: 'This is a simple rounded card using Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/150',
    contactEmail: 'oceanus@aeterna.et',
    contactName: 'Oceanus Orbitalis',
    contactMobile: 'OCE-3949-848',
    chipText: 'light',
  },
  {
    title: 'Title 4',
    subtitle: 'This is a simple rounded card using Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/150',
    contactEmail: 'chronos@aeterna.et',
    contactName: 'Chronus Filia Glutonis',
    contactMobile: 'CHR-0674-193',
    chipText: 'light',
  },
  {
    title: 'Title 5',
    subtitle: 'This is a simple rounded card using Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/150',
    contactEmail: 'zeus@aeterna.et',
    contactName: 'Zeus Tonantus',
    contactMobile: 'ZUS-5198-347',
    chipText: 'light',
  },
  {
    title: 'Title 6',
    subtitle: 'This is a simple rounded card using Tailwind CSS.',
    imageUrl: 'https://via.placeholder.com/150',
    contactEmail: 'trajanus.divinus@aeterna.et',
    contactName: 'Trajanus Antoninus',
    contactMobile: 'SPQR-7777-777',
    chipText: 'light',
  },
]
