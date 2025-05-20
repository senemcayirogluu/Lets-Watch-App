import React, { useEffect } from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = React.useState([]);
    const [trailerUrl, setTrailerUrl] = React.useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log("API yanıtı:", request.data);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            const name = movie?.name || movie?.title || movie?.original_name || movie?.original_title || "";
            movieTrailer(name)
                .then((url) => {
                    if (!url) {
                        console.warn("Trailer not found for movie:", name);
                        return;
                    }
                    try {
                        const urlParams = new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get('v'));
                    } catch (error) {
                        console.error('Error parsing trailer URL:', error);
                    }
                  
                })
                .catch((error) => console.error('Error fetching trailer URL:', error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies?.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`poster ${isLargeRow && "posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name || movie.title || movie.original_name || movie.original_title}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row