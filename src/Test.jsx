import { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [movieList, setMovieList] = useState([]);
  const getMovie = async () => {
    await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=2c24297ec7388147898fc3d5f711bdb8")
      .then((res) => {
        const movies = res.data.results;
        setMovieList(movies);
      }
      )
  };

  console.log(movieList);
  useEffect(() => {
    getMovie();
  }, []);


  return (
    <div>
      {movieList.map((movie) => {
        return <img key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />;
      })}
    </div>
  );
}
export default Test;
