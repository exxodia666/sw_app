import {createSlice} from '@reduxjs/toolkit';
import {fetchPeople} from '../../thunk/people.thunk';
import {Person} from '../../../models/Person';
// Define a type for the slice state
interface PeopleState {
  page: number;
  people: Array<Person>;
  isLoading: boolean;
  error: string | undefined;
}
// Define the initial state using that type
const initialState: PeopleState = {
  page: 1,
  people: [],
  isLoading: false,
  error: undefined,
};
//
const slice = createSlice({
  name: 'people',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPeople.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.people = [...state.people, ...action.payload];
      state.page = state.page + 1;
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(fetchPeople.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = true;
    });
  },
});

export const peopleReducer = slice.reducer;
