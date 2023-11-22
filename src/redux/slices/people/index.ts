import {createSlice} from '@reduxjs/toolkit';
import {fetchPeople} from '../../thunk/people.thunk';
import {initialState} from './initialState';

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
