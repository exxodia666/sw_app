import {createAsyncThunk} from '@reduxjs/toolkit';
import {peopleService} from '../../services/people.service';
import {Person} from '../../models/Person';
import {AppDispatch, RootState} from '../types';

export const fetchPeople = createAsyncThunk<
  Array<Person>,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>('people/fetch', async (_, thunkApi) => {
  const page = thunkApi.getState().people.page;
  const {results} = await peopleService.getPeople(page);
  return results;
});
