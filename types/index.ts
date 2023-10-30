export interface INavlinks {
  label: string;
  href: string;
  icon: any;
}

export interface IBeneficiaries {
  _id: string;
  name: string;
  age: number;
  city: string;
  reports: IReport[];
  image: string;
}

export interface IReport {
  _id: string;
  content: string;
}
