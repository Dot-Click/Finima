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

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;
