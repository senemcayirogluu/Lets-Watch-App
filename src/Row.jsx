import React, { useEffect } from 'react'
import axios from './axios'
import './Row.css'

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="posters">
                {movies?.map((movie) => (
                    <img
                        key={movie.id}
                        className="poster"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row