import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slice/dataSlice'; // Update the import path

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  const handleFetchData = async () => {
    try {
      // Send an OPTIONS request first to trigger the preflight request
      const preflightResponse = await fetch('http://localhost:8000/api/vyra', {
        method: 'OPTIONS',
        headers: {
          'Access-Control-Request-Method': 'GET',
        },
      });

      if (preflightResponse.status === 204) {
        // If the preflight request is successful, dispatch the fetchData async thunk action
        dispatch(fetchData());
      } 
      else 
      {
        console.error('Error');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the case where there's an error with the preflight request (if needed)
    }
  };

  return (
    <div className="App">
      <button onClick={handleFetchData} disabled={isLoading}>
        Get Resource
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
          <pre>{JSON.stringify(data, null, 2)}</pre>
         )}
    </div>
  );
}

export default App;














