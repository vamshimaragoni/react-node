// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import dataReducers from './reducers/dataReducers';

// const store = configureStore({
//   reducer: {
//     data: dataReducers,
//   },
// });

// export default store;
// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk'; // Import Redux Thunk middleware
// import dataReducers from './reducers/dataReducers';

// const store = configureStore({
//   reducer: {
//     data: dataReducers,
//   },
//   middleware: [thunk], // Add Redux Thunk middleware
// });

// export default store;
// // store.js
// import { configureStore } from '@reduxjs/toolkit';
// import dataReducers from './slice/dataSlice'; // Import the slice reducer
// import thunk from 'redux-thunk'; // Import Redux Thunk

// const store = configureStore({
//   reducer: {
//     data: dataReducers, // Use the slice reducer
//   },
//   middleware: [thunk], 
// });

// export default store;
































import { configureStore } from '@reduxjs/toolkit';
import dataReducers from './slice/dataSlice'; // Import the slice reducer
//import thunk from 'redux-thunk'; // Import Redux Thunk

const store = configureStore({
  reducer: {
    data: dataReducers, // Use the slice reducer
  },
//  middleware: [thunk], 
});

export default store;















