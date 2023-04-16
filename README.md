# Expenses App API
This is an API for the Expenses App, a React-based application that allows users to track their expenses. This API provides the backend functionality for the application, allowing users to create, read, update, and delete expense records.

## Getting Started
To use this API, you will need to have Node.js installed on your system. You can download Node.js from the official website: https://nodejs.org/

To install the dependencies for this API, run the following command in the project directory:

```
npm install
```
To start the server, run the following command:


```
npm start
```
The server will start on port 3001 by default. You can change this by setting the PORT environment variable.

## API Endpoints
This API provides the following endpoints:

### GET /expenses
Returns a list of all expenses.

### POST /expenses
Creates a new expense record.

### DELETE /expenses/:id
Deletes the expense record with the specified ID.

## Technologies Used
This API was built using Node.js, Nodemon and the Express framework. It uses MongoDB as the database.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.
