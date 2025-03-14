# Node.js Express CRUD Operations

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js and Express. It serves as an exploration of backend development with basic database interactions.

## Features
- Create new records
- Retrieve all records
- Retrieve a single record by ID
- Update existing records
- Delete records

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/) (if using a database)

## Installation
1. Clone the repository:
   ```sh
   git clone [git@github.com:talk2uttam14/contact-backend.git](https://github.com/talk2uttam14/contact-backend.git)
   ```
2. Navigate to the project directory:
   ```sh
   cd contact-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the server:
   ```sh
   npm run dev
   ```
2. The server will run on `http://localhost:5001`.

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | `/contacts` | Fetch all items |
| GET    | `/contacts/:id` | Fetch a single item by ID |
| POST   | `/contacts` | Create a new item |
| PUT    | `/contacts/:id` | Update an existing item by ID |
| DELETE | `/contacts/:id` | Delete an item by ID |

## Technologies Used
- Node.js
- Express.js
- MongoDB 
- Mongoose 

## Author
[Uttam Kumar Dey](https://github.com/talk2uttam14)

