Movie Lobby API
This document outlines the design and implementation details of a Movie Lobby API for OTT applications, built using TypeScript and MongoDB.
Technology Stack:
•	Backend: TypeScript, Node.js (Express framework), Mongoose (MongoDB driver)
•	Database: MongoDB (ideally)
•	Testing: Jest (unit testing), Supertest (integration testing)
•	Code Quality: ESLint
API Endpoints:
•	GET /movies: List all the movies in the lobby
•	GET /search?q={query}: Search for a movie by title or genre
•	POST /movies: Add a new movie to the lobby (requires "admin" role)
•	PUT /movies/:id: Update an existing movie's information (requires "admin" role)
•	DELETE /movies/:id: Delete a movie from the lobby (requires "admin" role)
Data Model:
TypeScript
interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}
API Documentation:
1. List All Movies
GET /movies

Response:
JSON
[
  {
    "id": "1",
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "rating": 9.3,
    "streamingLink": "https://www.netflix.com/watch/12345"
  },
  ...
]
 

2. Search for Movie
GET /search?q={query}

Parameters:
* q: string (required) - search query (by title or genre)

Response:
JSON
[
  {
    "id": "2",
    "title": "The Godfather",
    "genre": "Crime",
    "rating": 9.2,
    "streamingLink": "https://www.hulu.com/watch/54321"
  },
  ...
]
 
3. Add a Movie
POST /movies

Request Body:
{
  "title": "The Dark Knight",
  "genre": "Action",
  "rating": 9.0,
  "streamingLink": "https://www.amazon.com/watch/98765"
}

Response:
JSON
{
  "message": "Movie added successfully"
}
 
4. Update Movie Information
PUT /movies/:id

Request Body:
{
  "title": "The Lord of the Rings: The Return of the King",
  "genre": "Fantasy",
  "rating": 9.4,
  "streamingLink": "https://www.disneyplus.com/watch/123456"
}

Parameters:
* id: string (required) - movie ID

Response:
JSON
{
  "message": "Movie information updated successfully"
}
 
5. Delete Movie
DELETE /movies/:id

Parameters:
* id: string (required) - movie ID

Response:
JSON
{
  "message": "Movie deleted successfully"
}
 
Testing:
Unit and integration tests are implemented using Jest and Supertest to ensure the API's functionality.
Code Quality:
ESLint is used to enforce coding style and ensure maintainability.
Caching:
(Optional) You can implement caching mechanisms (e.g., Redis) to improve API performance by caching frequently accessed data.
Setup and Installation:
1.	Install dependencies:
Bash
npm install
 
2.	Configure MongoDB connection details in the environment or config file.
3.	Start the API:
Bash
npm start
 
Running Tests:
Bash
npm test
 



