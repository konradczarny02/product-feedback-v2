import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortBy } from '../types/types';

const initialState: { sort: SortBy } = {
  sort: 'Most Upvotes',
};

export const filterSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<SortBy>) => {
      state.sort = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;

export default filterSlice.reducer;
