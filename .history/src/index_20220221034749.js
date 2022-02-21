import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchData } from "./components/actions";

//root reducer
import addFetchedDataReducer from "./components/reducers/addFetchedDataReducer";
// import store from "./App/store";

const store = createStore(
  addFetchedDataReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch({type: "ADD_FETCHED_DATA", payload: {name: 'James', age: 20}});
// fetchData().then(data => {
//   //store contains dispatch function
//   store.dispatch({type: "ADD_FETCHED_DATA", payload: data})
// })

console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();