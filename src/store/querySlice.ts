import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

export interface IQueryState {
  steps: any;
}

const initialState: IQueryState = {
  steps: [],
};

export const querySlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addQueryStep: (state, action: PayloadAction<any>) => {
      state.steps.push(action.payload);
    },
    clearSpecific: (state, action: PayloadAction<number>) => {
      state.steps.splice(action.payload, 1);
    },
    clearAll: (state) => {
      state.steps = [];
    },
  },
});

export const { addQueryStep, clearSpecific, clearAll } = querySlice.actions;

export const selectQuery = (state: RootState) => state.query;

export default querySlice.reducer;
