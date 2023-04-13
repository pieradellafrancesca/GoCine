const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export const GET = async (resource) => {
  const res = await fetch(`${BASE_URL}movie/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export const GET_SEARCH = async (string) => {
  const res = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${string}`
  );
  const data = await res.json();
  return data;
};

export const GET_GENRES = async () => {
  const res = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

// GET POPULAR
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>

// GET TOP RATED
// https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>

// GET NOW-PLAYING
// https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>

// GET UPCOMING
// https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>

// GET CREDITS (CAST)
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>

// GET IMAGES
// https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>

// GET VIDEOS
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>

// GET SIMILAR MOVIES
// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>

//////////

// SEARCH MOVIES
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=<<string>>

//////////

// GET MOVIE GENRES
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>

//////////

// GET IMAGE
// https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg => BASE_URL + SIZE + FILE_PATH
