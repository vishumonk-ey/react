import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// react apna khudhka dom bhi banata hai
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//there is no js linked to the index.html file but still it is getting executed because of reactscripts.
 