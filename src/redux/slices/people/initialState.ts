import {PeopleState} from './types';

// Define the initial state using that type
export const initialState: PeopleState = {
  page: 1,
  people: [],
  isLoading: false,
  error: undefined,
};
//
