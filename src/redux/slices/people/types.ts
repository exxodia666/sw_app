import {Person} from '../../../models/Person';

export interface PeopleState {
  page: number;
  people: Array<Person>;
  isLoading: boolean;
  error: string | undefined;
}
