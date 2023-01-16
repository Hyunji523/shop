import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  //<React.StrictMode>
  //store.js에 있는 state App.js에서 전부 사용가능

  <Provider store={store}> 
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>

  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
