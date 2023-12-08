import { createSlice } from '@reduxjs/toolkit';

const filterSearchSlice = createSlice({
  name: 'filterSearch',
  initialState: '',
  reducers: {
    filterSearch: (state, action) => {
      state = action.payload;
    },
  },
});

export const { filterSearch } = filterSearchSlice.actions;
export const filterSearchReducer = filterSearchSlice.reducer;
