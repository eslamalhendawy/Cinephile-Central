import { useState, useEffect } from "react";
import axios from "axios";

function PopularMovie() {
  const showURL = "https://api.themoviedb.org/3/trending/tv/day?api_key=2c24297ec7388147898fc3d5f711bdb8";
  const [show, setShow] = useState([]);
  const [score, setScore] = useState(0);
  const [showRelease, setShowRelease] = useState("");
  const [showGenre, setShowGenre] = useState([]);
  const getMovies = async () => {
    await axios
      .get(showURL)
      .then((res) => {
        setShow(res.data.results[0]);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    let movieDateTemp = show.first_air_date;
    if (show && movieDateTemp && typeof movieDateTemp === "string") {
      movieDateTemp = movieDateTemp.split("-").reverse().join("-");
      setShowRelease(movieDateTemp);
    }
    let scoreTemp = show.vote_average;
    if (show && scoreTemp && typeof scoreTemp === "number") {
      scoreTemp = Math.floor(scoreTemp * 10);
      setScore(scoreTemp);
    }
    let genreTemp = show.genre_ids;
    if (show && genreTemp && Array.isArray(genreTemp)) {
      genreTemp = convertGenreIds(genreTemp);
      setShowGenre(genreTemp);
    }
  }, [show]);

  const convertGenreIds = (ids) => {
    const genreDict = {
      10759: "Action & Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      10762: "Kids",
      9648: "Mystery",
      10763: "News",
      10764: "Reality",
      10765: "Sci-Fi & Fantasy",
      10766: "Soap",
      10767: "Talk",
      10768: "War & Politics",
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
      <h2 className="text-xl md:text-4xl mb-6 mt-8 font-bold">Featured TV Show</h2>
      <div className="flex flex-col sm:flex-row justify-center sm:justify-normal items-center sm:items-start sm:space-x-10">
        <div className="max-w-xs mb-4">
          <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt="" />
        </div>
        <div className="">
          <h2 className="text-xl md:text-2xl mb-4 font-semibold">
            {show.name} <span className="block sm:inline font-light italic text-xl md-text-2xl">{`(${showRelease})`}</span>
          </h2>
          <p className="text-xl mb-2">
            {showGenre.map((genre, index, arr) => {
              if (index === arr.length - 1) {
                return genre;
              } else {
                return genre + ", ";
              }
            })}
          </p>
          <div className="flex items-center mb-2">
            <p className="mr-4 text-xl font-extrabold w-[60px] h-[60px] flex justify-center items-center rounded-full bg-[#2F5233]">{`${score}%`}</p>
            <p className="text-xl font-medium">
              User <br></br> Score
            </p>
          </div>
          <h3 className="text-xl md:text-2xl mb-4 font-semibold">Overview</h3>
          <p className="text-lg sm:text-xl mb-2 sm:w-3/4">{show.overview}</p>
          <button className="bg-[#be665d] hover:bg-[#9C322F] duration-300 rounded-lg text-xl font-bold p-4">More Info</button>
        </div>
      </div>
    </>
  );
}

export default PopularMovie;
