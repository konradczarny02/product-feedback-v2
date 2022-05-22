import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter } from '../types/types';

const initialState: { filter: Filter } = {
  filter: 'All',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
});

export const { change } = filterSlice.actions;

export default filterSlice.reducer;
