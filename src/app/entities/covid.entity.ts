export interface Covid {
  cases: number;
  datetime: Date;
  deaths: number;
  refuses: number;
  state: string;
  suspects: number;
  uf: string;
}

export interface Paises {
  country: string;
  cases: number;
  confirmed: number;
  deaths: number;
  recovered: number;
  updated_at: Date;
}