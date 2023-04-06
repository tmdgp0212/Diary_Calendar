import { combineReducers } from "redux";
import diaryReducer from "./diaryReducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import dateReducer from "./dateReducer";

const rootReducer = combineReducers({
  diary: diaryReducer,
  date: dateReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
