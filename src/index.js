// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



export { setLSData, getLSData, removeLSData, clearLS } from "./utils/localStorageUtils";
export { default as Each } from "./components/Each";
export { default as Show } from "./components/Show";
export { 
  debounce, 
  throttle, 
  capitalize, 
  truncateText, 
  deepClone, 
  generateUUID, 
  formatDate 
} from "./utils/helpers";