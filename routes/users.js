// Importing the necessary modules from the Express framework and controller functions
import express from 'express'; // Importing Express framework
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js'; // Importing controller functions

// Creating a router instance from Express
const router = express.Router();

// Defining routes and associating them with respective controller functions
router.get('/', getUsers); // Route for retrieving all users
router.post('/', createUser); // Route for creating a new user
router.get('/:id', getUser); // Route for retrieving a specific user by ID
router.delete('/:id', deleteUser); // Route for deleting a user by ID
router.patch('/:id', updateUser); // Route for updating a user by ID

// Exporting the router to be used by the main application
export default router;