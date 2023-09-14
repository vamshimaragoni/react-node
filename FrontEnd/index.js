// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './components/App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import App from './components/App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);












// index.js: This is the entry point of your React application. When you run your React app, 
//the first file that's executed is index.js. Here's what happens in this file:

// It imports the necessary modules: React, ReactDOM, Provider from React Redux, your Redux store from store.js, and the App component from components/App.js.

// It wraps your entire application with the Redux Provider component, which provides access to the Redux store to all components in your app.

// Finally, it renders your App component inside the Provider, which means all child components can access the Redux store.

// In essence, index.js sets up the Redux store and establishes the root of your React application.