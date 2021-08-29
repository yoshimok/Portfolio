export interface IProfile {
  name: string;
  icon: string;
  position: string;
}

export interface IUrlInfo {
  accountName: string;
  serviceName: string;
  serviceIcon: string;
  url: string;
}

export interface IHeaderMenuItem {
  title: string;
  href: string;
}

export interface IAuthorProfile {
  profile: IProfile;
  services: IUrlInfo[];
}

export interface ISkill {
  name: string;
  logo?: string;
  url?: string;
}
