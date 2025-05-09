const API_KEY = "601a41d824822b016cb83a0a9fc858be"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;



//tmdb api key v3
//601a41d824822b016cb83a0a9fc858be 

//tmdb api key v4 read access token
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDFhNDFkODI0ODIyYjAxNmNiODNhMGE5ZmM4NThiZSIsIm5iZiI6MTc0Njc5MzA3NC45ODcsInN1YiI6IjY4MWRmMjcyZWQ1YzY5ZGIzZjg4Yzg0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BlXmqiZlmfJJpb7SDI8HKGCYrUNxXj5TJMB1loIbYvk