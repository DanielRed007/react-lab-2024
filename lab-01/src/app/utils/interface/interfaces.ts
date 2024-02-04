export interface IHomeInfoCard {
  info: ICardInfo[]
}

export interface ICardInfo {
  title: string
  subtitle: string
  description: string
  link: string
}

export interface INavbarRoute {
  route: string
  title: string
}

export interface IFeatureCard {
  title: string
  description: string
  icon: React.ReactNode
}

export interface IFeatureTitleSection {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
}

export interface IUser {
  name: string
  username: string
  email: string
}

export interface ILocation {
  name: string
  city: string
  default: boolean
}

export interface IWorkModality {
  name: string
}

export interface IReservation {
  desk: string
  location: string
  parkingEnabled: boolean
  vehiclePlate: string
  workModality: string
}

export interface ILabel {
  name: string
}

export interface IContactCardSmall {
  title: string
  subtitle: string
  imageUrl?: string
  chipText: string
  onClick?: (value: any) => void
}
