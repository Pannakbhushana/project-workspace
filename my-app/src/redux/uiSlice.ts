import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UIState = {
  showSidebar: boolean;
};

const initialState: UIState = {
  showSidebar: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => ({ ...state, showSidebar: !state.showSidebar }),
    setSidebar: (state,
      action: PayloadAction<boolean>) => ({ ...state, showSidebar: action.payload }),
  },
});

export const { toggleSidebar, setSidebar } = uiSlice.actions;

export default uiSlice.reducer;
