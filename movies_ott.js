// Import required modules
import express, { Request, Response } from 'express';

// Create Express application
const app = express();

// Define a sample movie data structure
interface Movie {
  id: string;
  title: string;
  genre: string;
  rating: number;
  streamingLink: string;
}

// Sample data (for demonstration purposes)
const movies: Movie[] = [
  {
    id: '1',
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    rating: 9.3,
    streamingLink: 'https://www.netflix.com/watch/12345',
  },
  // Add more movies as needed
];

// Middleware to parse JSON in the request body
app.use(express.json());

// Define endpoints

// GET /movies
app.get('/movies', (req: Request, res: Response) => {
  res.json(movies);
});

// GET /search?q={query}
app.get('/search', (req: Request, res: Response) => {
  const query: string | undefined = req.query.q as string;
  if (!query) {
    return res.status(400).json({ error: 'Missing search query parameter' });
  }

  const results = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase())
  );

  res.json(results);
});

// PUT /movies/:id
app.put('/movies/:id', (req: Request, res: Response) => {
  const movieId: string = req.params.id;
  const updatedMovie: Movie | undefined = req.body;

  // Check if the movie with the given ID exists
  const existingMovieIndex = movies.findIndex((movie) => movie.id === movieId);

  if (existingMovieIndex === -1) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  // Update the movie
  movies[existingMovieIndex] = { ...movies[existingMovieIndex], ...updatedMovie };

  res.json({ message: 'Movie information updated successfully' });
});

// DELETE /movies/:id
app.delete('/movies/:id', (req: Request, res: Response) => {
  const movieId: string = req.params.id;

  // Filter out the movie with the given ID
  const updatedMovies = movies.filter((movie) => movie.id !== movieId);

  if (updatedMovies.length === movies.length) {
    return res.status(404).json({ error: 'Movie not found' });
  }

  // Update the movies array
  movies.length = 0;
  Array.prototype.push.apply(movies, updatedMovies);

  res.json({ message: 'Movie deleted successfully' });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
