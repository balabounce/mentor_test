import { configureStore, combineReducers } from "@reduxjs/toolkit";
import timerReducer from './reducers/timerSlice';
import mapReducer from './reducers/mapSlice';

const rootReducer = combineReducers({
  timer: timerReducer,
  map: mapReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer
});