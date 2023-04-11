import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IStepsState {
  type: string;
  currentStep: number;
}

const initialState: IStepsState = {
  type: '',
  currentStep: 0,
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep !== 0) {
        state.currentStep -= 1;
      }
    },
    clearStepsData: (state) => {
      state.type = '';
      state.currentStep = 0;
    },
  },
});

export const { setType, nextStep, prevStep, clearStepsData } =
  stepsSlice.actions;

export const selectCurrentStep = (state: RootState) => state.steps.currentStep;
export const selectStepType = (state: RootState) => state.steps.type;

export default stepsSlice.reducer;
