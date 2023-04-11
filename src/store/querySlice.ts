import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchResult } from './api';

export interface IQueryState {
  steps: any;
  result: any;
}

export const getResultAsync = createAsyncThunk(
  'query/fetchResult',
  async (queryData: any) => {
    const response: any = await fetchResult(queryData);
    return response.data;
  }
);

const initialState: IQueryState = {
  steps: [],
  result: [
    {
      id: 0,
      name: 'asd',
      duration: '',
      genre: '',
      rating: '',
      year: '',
      director: '',
      actors: '',
      description: '',
    },
  ],
};

export const querySlice = createSlice({
  name: 'query',
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
      state.result = [
        {
          id: 0,
          name: '',
          duration: '',
          genre: '',
          rating: '',
          year: '',
          director: '',
          actors: '',
          description: '',
        },
      ];
    },
    setResult: (state, action: PayloadAction<any>) => {
      state.result = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getResultAsync.pending, (state) => {
        // state.status = 'loading';
      })
      .addCase(getResultAsync.fulfilled, (state, action) => {
        // state.status = 'idle';
        // console.log(action.payload);

        state.result = action.payload;
      })
      .addCase(getResultAsync.rejected, (state) => {
        // state.status = 'failed';
      });
  },
});

export const { addQueryStep, clearSpecific, clearAll, setResult } =
  querySlice.actions;

export const selectQuery = (state: RootState) => state.query;
export const selectResult = (state: RootState) => state.query.result;

// export const getResultAsync =
//   (): AppThunk =>
//   (dispatch, getState) => {

//     dispatch(setResult(['asd']));
//   };

export default querySlice.reducer;
