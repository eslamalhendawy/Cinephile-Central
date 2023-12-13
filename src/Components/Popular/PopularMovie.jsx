import { useState, useEffect } from "react";
import axios from "axios";


function PopularMovie() {
  const movieURL = "https://api.themoviedb.org/3/trending/movie/day?api_key=2c24297ec7388147898fc3d5f711bdb8";
  const [movie, setMovie] = useState([]);
  const [score, setScore] = useState(0);
  const [movieRelease, setMovieRelease] = useState("");
  const [movieGenre, setMovieGenre] = useState([]);
  const getMovies = async () => {
    await axios
      .get(movieURL)
      .then((res) => {
        setMovie(res.data.results[0]);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    let movieDateTemp = movie.release_date;
    if (movie && movieDateTemp && typeof movieDateTemp === "string") {
      movieDateTemp = movieDateTemp.split("-").reverse().join("-");
      setMovieRelease(movieDateTemp);
    }
    let scoreTemp = movie.vote_average;
    if(movie && scoreTemp && typeof scoreTemp === "number"){
      scoreTemp = Math.floor(scoreTemp * 10);
      setScore(scoreTemp);
    }
    let genreTemp = movie.genre_ids;
    if(movie && genreTemp && Array.isArray(genreTemp)){
      genreTemp = convertGenreIds(genreTemp);
      setMovieGenre(genreTemp)
    }
  }, [movie]);

  const convertGenreIds = (ids) => {
    const genreDict = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Science Fiction",
      10770: "TV Movie",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    const genreNames = [];
    ids.forEach((id) => {
      const genreName = genreDict[id];
      if (genreName) {
        genreNames.push(genreName);
      }
    });

    return genreNames;
  };
  return (
    <>
      <h2 className="text-xl md:text-4xl mb-6 font-bold">Featured Movie</h2>
        <div className="flex flex-col sm:flex-row justify-center sm:justify-normal items-center sm:items-start sm:space-x-10">
          <div className="max-w-xs mb-4">
            <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
          </div>
          <div className="">
            <h2 className="text-xl md:text-2xl mb-4 font-semibold">{movie.original_title} <span className="block sm:inline font-light italic text-xl md-text-2xl">{`(${movieRelease})`}</span></h2>
            <p className="text-xl mb-2">{movieGenre.map((genre, index, arr) => {
              if(index === arr.length - 1){
                return genre;
              }else {
                return genre + ", ";
              }
            })}</p>
            <div className="flex items-center mb-2">
              <p className="mr-4 text-xl font-extrabold w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#2F5233]">{`${score}%`}</p>
              <p className="text-xl font-medium">User <br></br> Score</p>
            </div>
            <h3 className="text-xl md:text-2xl mb-4 font-semibold">Overview</h3>
            <p className="text-lg sm:text-xl mb-2 sm:w-3/4">{movie.overview}</p>
            <button className="bg-[#be665d] hover:bg-[#9C322F] duration-300 rounded-lg text-base lg:text-xl font-bold p-2 lg:p-4">More Info</button>
          </div>
        </div>
    </>
  )
}

export default PopularMovie