import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import ImageContainer from "../../atoms/Image-container/container";
import ImageCont from "../../atoms/Image-container/container";
import './style.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";


// const [selectedCategory, setSelectedCategory] = useState("All");



const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const handleSearch = (event) => {
        let searchValue = event.target.value.trim().toLowerCase();
        if (searchValue === "") {
            setFilteredMovies(movies);
        } else {
            let filteredMovies = movies.filter(item => item.title.toLowerCase().includes(searchValue));
            setFilteredMovies(filteredMovies);
        }
    }
    useEffect(() => {
        (async () => {
            setLoading(true);
            const movies = await getMovies();
            setMovies(movies.results);
            setFilteredMovies(movies.results);
            setLoading(false);
            console.log({ movies });
        })();
    }, []);
    if (loading) {
        return <h1>Loading....</h1>
    }
    const firstMovie = filteredMovies[2];
    const imageUrl = firstMovie ? `${IMAGE_BASE_URL}/${firstMovie.poster_path}` : '';

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        color:"white",
        slidesToShow: 3,
        slidesToScroll: 1,
    };




    return (
        <div>
            <div className="nav">
                <p className="mov">M<span id="movie">oo</span>vie</p>
                <input type="search" placeholder="Search" onChange={handleSearch}></input>
                <p>Home</p>
                <p>My List</p>
                <button>Sign In</button>
            </div>

{/* 
            <Slider {...sliderSettings} className="moviesDisplay">
          {movies &&
          movies.slice(0, 4).map((movie) => (
         <div key={movie.id}>
        <ImageCont movie={movie} />
        <h2>{movie.title}</h2>
      </div>
    ))}
         </Slider> */}

          <div className="imag11">
                {imageUrl && <img src={imageUrl} alt={firstMovie.title} className="topim"/>}
                <h2>{movies.title}</h2>
            </div>

         
    

            <div className="buttnn">
            <Slider {...sliderSettings} className="buttonDisplay" styles={{color:"white"}}>

                <div><button>All</button></div>
                <div><button>Action</button></div>
                <div><button>Comedy</button></div>
                <div><button>Arabic</button></div>
                <div><button>series</button></div>
                <div><button>Adventure</button></div>
                <div><button>other</button></div>
 
                </Slider>

            </div>


            <div className="image-container">
                {loading === false && movies.length > 0 && movies.map(
                    
                    item => (
                        // <ImageContainer props={item} key={item.id} />

                        <Link to={`/moviedetails/${item.id}`} key={item.id}>
                        <ImageContainer props={item} />
                      </Link>
                    )
                )}
            </div>
        </div>
    );
};
export default MovieList;






