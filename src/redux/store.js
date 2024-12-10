// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// // reducers
// import { authReducer } from "./reducers/authReducer";

// const reducer = combineReducers({
//   auth: authReducer,
// });

// let initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import authSlice from "./slices/auth/auth";
import employeeSlice from "./slices/employee/employee";
import activitySlice from "./slices/activity/activity";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  storage,
  // whitelist: ["auth"], // Only persist the 'user' slice
};
const persistedAuthReducer = persistReducer(persistConfig, authSlice);
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: persistedAuthReducer,
    employee: employeeSlice,
    activity: activitySlice,
  },
});

export const persistor = persistStore(store);
export default store;
