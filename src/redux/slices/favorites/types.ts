export type FavoritePerson = {
  id: number;
  name: string;
  gender: string;
};

export interface PeopleState {
  people: Array<FavoritePerson>;
}
