import React, { useEffect } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = React.useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNewOriginals)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData()
    }, [])

    console.log("banner movie: ", movie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className="bannerContents">
                <h1 className='bannerTitle'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="bannerButtons">
                    <button className='bannerButton'>Play</button>
                    <button className='bannerButton'>My List</button>
                </div>
                <h1 className='bannerDescription'>{ truncate(movie?.overview, 150) }</h1>
                
                <div className="bannerBottom"></div>
            </div>
        </header>
    )
}

export default Banner