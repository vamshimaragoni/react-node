// slice/dataSlice.js
// slice/dataSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: {
//     loading: false,
//     data: null,
//     error: null,
//   },
//   reducers: {
//     fetchDataRequest: (state) => {
//       state.loading = true;
//     },
//     fetchDataSuccess: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = null;
//     },
//     fetchDataFailure: (state, action) => {
//       state.loading = false;
//       state.data = null;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   fetchDataRequest,
//   fetchDataSuccess,
//   fetchDataFailure,
// } = dataSlice.actions;

// export default dataSlice.reducer;
// slice/dataSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// // Define your initial state
// const initialState = {
//   loading: false,
//   data: null,
//   error: null,
// };

// // Create an async action using Redux Thunk
// export const fetchData = () => async (dispatch) => {
//   dispatch(fetchDataRequest());
//   try {
//     const response = await fetch('http://localhost:8000/api/users');
//     const responseData = await response.json();
//     dispatch(fetchDataSuccess(responseData));
//   } catch (error) {
//     dispatch(fetchDataFailure(error.message));
//   }
// };

// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {
//     fetchDataRequest: (state) => {
//       state.loading = true;
//     },
//     fetchDataSuccess: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = null;
//     },
//     fetchDataFailure: (state, action) => {
//       state.loading = false;
//       state.data = null;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   fetchDataRequest,
//   fetchDataSuccess,
//   fetchDataFailure,
// } = dataSlice.actions;

// export default dataSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   data: null,
//   error: null,
// };

// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {
//     fetchDataRequest: (state) => {
//       state.loading = true;
//     },
//     fetchDataSuccess: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//       state.error = null;
//     },
//     fetchDataFailure: (state, action) => {
//       state.loading = false;
//       state.data = null;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   fetchDataRequest,
//   fetchDataSuccess,
//   fetchDataFailure,
// } = dataSlice.actions;

// export default dataSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   data: null,
// };

// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {
//     fetchDataSuccess: (state, action) => {
//       state.data = action.payload;
//     },
//   },
// });

// export const { fetchDataSuccess } = dataSlice.actions;

// export default dataSlice.reducer;
// dataSlice.js












// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   data: null,
//   preflightError: null,
// };

// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {
//     fetchDataSuccess: (state, action) => {
//       state.data = action.payload;
//     },
//     setPreflightError: (state, action) => {
//       state.preflightError = action.payload;
//     },
//   },
// });

// export const { fetchDataSuccess, setPreflightError } = dataSlice.actions;

// export default dataSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Define an async thunk action to fetch data
// export const fetchData = createAsyncThunk('data/fetchData', async () => {
//   try {
//     // Make the GET request
//     const response = await fetch('http://localhost:8000/api/users');
//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     throw error; // Will be caught by the reject action automatically
//   }
// });

// const initialState = {
//   data: null,
//   preflightError: null,
// };

// const dataSlice = createSlice({
//   name: 'data',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         // Handle pending state if needed
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.data = action.payload; // Update the data in the state
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.preflightError = 'Error fetching data.'; // Handle error state
//       });
//   },
// });


























import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk action to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    // Make the GET request
    const response = await fetch('http://localhost:8000/api/users');
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw error; // Will be caught by the reject action automatically
  }
});

const initialState = {
  data: null,
  isLoading: false, 
  error: null, 
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true; // Set isLoading to true when pending
        state.error = null; // it Clear the error
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false; // Set isLoading to false when fulfilled
        state.data = action.payload; // here it Updates the data in the state
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false; 
        state.error = 'Error fetching data.'; 
      });
  },
});

export default dataSlice.reducer;
