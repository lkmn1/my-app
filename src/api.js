const API_KEY = "2367d4ec0c7addfa8014dcdbb1b4e936";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchNetflicOriginals: `/discover/tv?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHororMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
};

export default request;
