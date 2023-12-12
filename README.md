# Movie Lobby API

This document provides details about the design and implementation of a Movie Lobby API for Over-The-Top (OTT) applications. The API is built using TypeScript and MongoDB, employing various technologies for backend development, testing, and code quality.

## Technology Stack

- **Backend:** TypeScript, Node.js (Express framework), Mongoose (MongoDB driver)
- **Database:** MongoDB (ideally)
- **Testing:** Jest (unit testing), Supertest (integration testing)
- **Code Quality:** ESLint

## API Endpoints

1. **List All Movies**
   - **Endpoint:** `GET /movies`
   - **Description:** List all the movies in the lobby.
   - **Response:**
     ```json
     [
       {
         "id": "1",
         "title": "The Shawshank Redemption",
         "genre": "Drama",
         "rating": 9.3,
         "streamingLink": "https://www.netflix.com/watch/12345"
       },
       // ...
     ]
     ```

2. **Search for Movie**
   - **Endpoint:** `GET /search?q={query}`
   - **Parameters:**
     - `q`: string (required) - search query (by title or genre)
   - **Response:**
     ```json
     [
       {
         "id": "2",
         "title": "The Godfather",
         "genre": "Crime",
         "rating": 9.2,
         "streamingLink": "https://www.hulu.com/watch/54321"
       },
       // ...
     ]
     ```

3. **Add a Movie**
   - **Endpoint:** `POST /movies`
   - **Request Body:**
     ```json
     {
       "title": "The Dark Knight",
       "genre": "Action",
       "rating": 9.0,
       "streamingLink": "https://www.amazon.com/watch/98765"
     }
     ```
   - **Response:**
     ```json
     {
       "message": "Movie added successfully"
     }
     ```

4. **Update Movie Information**
   - **Endpoint:** `PUT /movies/:id`
   - **Request Body:**
     ```json
     {
       "title": "The Lord of the Rings: The Return of the King",
       "genre": "Fantasy",
       "rating": 9.4,
       "streamingLink": "https://www.disneyplus.com/watch/123456"
     }
     ```
   - **Parameters:**
     - `id`: string (required) - movie ID
   - **Response:**
     ```json
     {
       "message": "Movie information updated successfully"
     }
     ```

5. **Delete Movie**
   - **Endpoint:** `DELETE /movies/:id`
   - **Parameters:**
     - `id`: string (required) - movie ID
   - **Response:**
     ```json
     {
       "message": "Movie deleted successfully"
     }
     ```

## Data Model

```typescript
interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}
```

_id: Automatically generated unique identifier by MongoDB.
title: The title of the movie.
genre: The genre of the movie.
rating: The rating of the movie.
streamingLink: The link to stream the movie.
releaseYear: The year the movie was released.
actors: An array of actors starring in the movie.
director: The director of the movie.
createdAt: The timestamp indicating when the document was created.
updatedAt: The timestamp indicating when the document was last updated.

## Testing

Unit and integration tests are implemented using Jest and Supertest to ensure the API's functionality.

## Code Quality

ESLint is used to enforce coding style and ensure maintainability.

## Caching (Optional)

Caching mechanisms (e.g., Redis) can be implemented to improve API performance by caching frequently accessed data.

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure MongoDB connection details in the environment or config file.

3. Start the API:
   ```bash
   npm start
   ```

## Running Tests

```bash
npm test
```

