import {Person} from '../../../../models/Person';
import {FavoritePerson} from '../../../../redux/slices/favorites';

export type TListHeader = {
  people: Person[];
  onClear: () => void;
  favorites: FavoritePerson[];
};
