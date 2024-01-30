// Importing UUID for generating unique identifiers
import { v4 as uuidv4 } from 'uuid';

// Initializing an empty array to store users
let users = [];

// Controller function to retrieve all users
export const getUsers = (req, res) => {
  res.send(users);
}

// Controller function to create a new user
export const createUser = (req, res) => {
  // Extracting user data from the request body
  const user = req.body;
  
  // Generating a unique ID for the new user using UUID
  users.push({ ...user, id: uuidv4() });

  // Sending a response confirming user creation
  res.send(`User with the name ${user.firstName} added to the database!`);
}

// Controller function to retrieve a specific user by ID
export const getUser = (req, res) => {
  // Extracting user ID from request parameters
  const { id } = req.params;

  // Finding the user with the specified ID in the users array
  const foundUser = users.find((user) => user.id === id);

  // Sending the found user as a response
  res.send(foundUser);
}

// Controller function to delete a user by ID
export const deleteUser = (req, res) => {
  // Extracting user ID from request parameters
  const { id } = req.params;

  // Filtering out the user with the specified ID from the users array
  users = users.filter((user) => user.id !== id);

  // Sending a response confirming user deletion
  res.send(`User with the Id ${id} deleted from the database.`)
}

// Controller function to update a user by ID
export const updateUser = (req, res) => {
  // Extracting user ID from request parameters and updated user data from the request body
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  // Finding the user with the specified ID in the users array
  const user = users.find((user) => user.id === id);

  // Updating user data if provided in the request body
  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  // Sending a response confirming user update
  res.send(`User with the id ${id} has been updated`);
}