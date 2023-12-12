// Import required modules
import request from 'supertest';
import app from './yourExpressAppFile'; // Replace with the actual path to your Express app file

// Sample data (for testing purposes)
const testMovie = {
  id: '3',
  title: 'Inception',
  genre: 'Sci-Fi',
  rating: 8.8,
  streamingLink: 'https://www.example.com/inception',
};

describe('Movie Lobby API Endpoints', () => {
  it('GET /movies should return all movies', async () => {
    const response = await request(app).get('/movies');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining(testMovie)]));
  });

  it('GET /search?q={query} should return search results', async () => {
    const response = await request(app).get('/search?q=Inception');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining(testMovie)]));
  });

  it('PUT /movies/:id should update movie information', async () => {
    const updatedMovie = {
      title: 'Inception Updated',
      genre: 'Sci-Fi',
      rating: 9.0,
      streamingLink: 'https://www.example.com/inception-updated',
    };

    const response = await request(app).put(`/movies/${testMovie.id}`).send(updatedMovie);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Movie information updated successfully' });

    // Verify that the movie information is updated
    const updatedResponse = await request(app).get('/movies');
    expect(updatedResponse.body).toEqual(expect.arrayContaining([expect.objectContaining(updatedMovie)]));
  });

  it('DELETE /movies/:id should delete a movie', async () => {
    const response = await request(app).delete(`/movies/${testMovie.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Movie deleted successfully' });

    // Verify that the movie is deleted
    const updatedResponse = await request(app).get('/movies');
    expect(updatedResponse.body).not.toEqual(expect.arrayContaining([expect.objectContaining(testMovie)]));
  });
});
