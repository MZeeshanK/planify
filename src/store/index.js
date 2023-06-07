import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user';
import tasksReducer from './tasks';

export default configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
