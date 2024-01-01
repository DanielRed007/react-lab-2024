import { ICardInfo, INavbarRoute } from '../interface/interfaces'

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
