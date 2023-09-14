
// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Enable CORS for all routes with specific options
// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with the actual origin of your frontend app
//   methods: ['GET', 'OPTIONS'], // Allow 'GET' and 'OPTIONS' methods
// }));

// // Sample user data
// const users = [
//   { id: 1, name: 'User 1', email: 'user1@example.com' },
//   { id: 2, name: 'User 2', email: 'user2@example.com' },
//   { id: 3, name: 'Vamshi 2', email: 'user3@example.com' },
//   { id: 4, name: 'Vamshi 3', email: 'user4@example.com' },
// ];

// // Middleware to handle OPTIONS request for the /api/users endpoint
// app.options('/api/users', (req, res) => {
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS'); // Specify both 'GET' and 'OPTIONS' as allowed methods
//   res.status(204).end(); // No content in the response
// });

// // API route to handle the GET request for user data
// app.get('/api/users', (req, res) => {
//   res.json(users);
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// Import required modules
// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Sample user data
// const users = [
//   { id: 1, name: 'User 1', email: 'user1@example.com' },
//   { id: 2, name: 'User 2', email: 'user2@example.com' },
//   { id: 3, name: 'Vamshi 2', email: 'user3@example.com' },
//   { id: 4, name: 'Vamshi 3', email: 'user4@example.com' },
// ];

// // Enable CORS for all routes with specific options
// app.use(cors({
//   origin: 'http://localhost:3000', // Replace with the actual origin of your frontend app
//   methods: 'GET, POST, OPTIONS', // Allow 'GET', 'POST', and 'OPTIONS' methods
// }));


// // Middleware to handle OPTIONS request for the /api/users endpoint
// app.options('/api/users', (req, res) => {
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Specify allowed methods
//   res. header ('Access-Control-Expose-Headers', 'Access-Control-Allow-Methods');
//   res.status(204).send(); // No content in the response
// });

// // API route to handle the GET request for user data
// app.get('/api/users', (req, res) => {
//   res.json(users);
// });


// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

















//backend code
const express = require('express');
const cors = require('cors');
const app = express();

// Sample user data
const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  { id: 3, name: 'Vamshi 2', email: 'user3@example.com' },
  { id: 4, name: 'Vamshi 3', email: 'user4@example.com' },
];
// Enable CORS for all routes with specific options
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'OPTIONS'], 
}));


// Middleware to handle OPTIONS request for the /api/users endpoint
app.options('/api/vyra', (req, res) => {
  console.log("requeset received");
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS'); 
  res.status(204).end(); 
});

// API route to handle the GET request for user data
app.get('/api/users', (req, res) => {
  res.json(users);
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// app.post('/api/users', (req, res) => {
//   // Handle POST request here
//   // ...

//   res.status(201).json(newUser);
// });
