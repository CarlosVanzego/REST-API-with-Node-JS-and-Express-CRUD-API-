User Management API
This repository contains code for a simple User Management API built using Node.js and Express.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user data.

Prerequisites
Before running the application, ensure you have the following installed:

Node.js: Download Node.js
npm (Node Package Manager): Comes bundled with Node.js installation
Getting Started
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
cd user-management-api
npm install
Run the application:

bash
Copy code
npm start
The server will start running on http://localhost:4000.

Routes
GET /users: Retrieve all users.
POST /users: Create a new user.
GET /users/:id: Retrieve a specific user by ID.
DELETE /users/:id: Delete a user by ID.
PATCH /users/:id: Update a user by ID.
Controller Functions
getUsers: Retrieve all users.
createUser: Create a new user.
getUser: Retrieve a specific user by ID.
deleteUser: Delete a user by ID.
updateUser: Update a user by ID.
Example JSON Data
json
Copy code
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 27
}
Dependencies
Express.js: Web framework for Node.js
body-parser: Middleware for parsing request bodies
uuid: Library for generating unique identifiers
