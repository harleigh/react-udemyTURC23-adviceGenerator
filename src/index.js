import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './adviceGenerator';  //App is whatever function export default is 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>  //so the useEffect on mount only runs once...
    <App />
  //</React.StrictMode>
);