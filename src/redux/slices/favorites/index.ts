import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {FavoritePerson} from './types';
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
