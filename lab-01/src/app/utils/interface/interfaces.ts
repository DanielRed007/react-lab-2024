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
