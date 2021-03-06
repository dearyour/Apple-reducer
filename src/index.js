import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let 기본state = [{ id: 0, name: "멋진신발", quan: 2 }];

function reducer(state = 기본state, 액션) {
  if (액션.type === "항목추가") {
    let copy = [...state];
    copy.push(액션.payload);
    return copy;
  } else if (액션.type === "수량증가") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (액션.type === "수량감소") {
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
