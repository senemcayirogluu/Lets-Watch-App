import React, { useEffect } from 'react'
import axios from './axios'
import './Row.css'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies?.map((movie) => (
                    <img
                        key={movie.id}
                        className={`poster ${isLargeRow && "posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row