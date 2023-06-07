import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: null,
  },
  reducers: {
    setTasks: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload;
    },
    setToUpdate: (state, action) => {
      state.data.forEach(item => {
        if (item?.uid === action.payload?.uid) {
          item.checked = !item.checked;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTasks, setToUpdate } = tasksSlice.actions;

export default tasksSlice.reducer;
