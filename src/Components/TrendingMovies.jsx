import { useEffect, useState } from "react";
import { getTrendingMovies } from "../Services/APICalls";
import MovieSlider from "./MovieSlider";

function TrendingMovies() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      let temp = await getTrendingMovies();
      setList(temp);
    };
    fetchList();
  }, []);
  return (
    <div>
      <h1 className="text-[#f3c531] font-bold text-2xl sm:text-3xl mb-6">Trending Movies</h1>
      <MovieSlider list={list} />
    </div>
  );
}

export default TrendingMovies;
