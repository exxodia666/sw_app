import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export type FavoritePerson = {
  id: number;
  name: string;
  gender: string;
};

interface PeopleState {
  people: Array<FavoritePerson>;
}

const initialState: PeopleState = {
  people: [],
};
//
const slice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoritePerson>) => {
      state.people = [...state.people, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.people = [...state.people].filter(e => e.id !== action.payload);
    },
    resetFavorite: state => {
      state.people = [];
    },
  },
});

export const {addFavorite, removeFavorite, resetFavorite} = slice.actions;

export const favoritesReducer = slice.reducer;
