// Importing the necessary modules from the Express framework and other dependencies
import express from 'express'; // Importing Express framework
import bodyParser from 'body-parser'; // Importing body-parser middleware for parsing request bodies

// Importing user routes from a separate file
import usersRoutes from './routes/users.js';

// Creating an instance of the Express application
const app = express();
// Defining the port number
const PORT = 4000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Mounting the user routes at the '/users' endpoint
app.use('/users', usersRoutes);

// Route for the homepage
app.get('/', (req, res) => res.send('Hello from Homepage.'));

// Starting the server and listening on the defined port
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));