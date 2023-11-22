export interface Person extends ResponsePerson {
  id: number;
}

export interface ResponsePerson {
  birth_year: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: Array<string>;
  starships: Array<string>;
  url: string;
  vehicles: Array<string>;
}
