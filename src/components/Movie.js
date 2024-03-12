// Movie.js
import React from 'react';

const Movie = ({ title, releaseDate, posterPath }) => (
  <div className="border p-4 rounded-md">
    <img
      src={`https://image.tmdb.org/t/p/w300${posterPath}`}
      alt={title}
      className="w-full h-48 object-cover mb-2"
    />
    <p className="text-lg font-bold">{title}</p>
    <p className="text-gray-600">{releaseDate}</p>
  </div>
);

export default Movie;
