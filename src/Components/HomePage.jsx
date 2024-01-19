import { useEffect } from "react";
import Favorites from "./Favorites";
import TrendingMovies from "./TrendingMovies";
import TrendingShows from "./TrendingShows";
import MovieOfTheWeek from "./MovieOfTheWeek";
import ShowOfTheWeek from "./ShowOfTheWeek";

function HomePage() {
  useEffect(() => {
    document.title = `Cinephile Central`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#000000]">
      <div className="container mx-auto px-6 py-2 text-white">
        <Favorites />
        <TrendingMovies />
        <TrendingShows />
        <MovieOfTheWeek />
        <ShowOfTheWeek />
      </div>
    </div>
  );
}

export default HomePage;
