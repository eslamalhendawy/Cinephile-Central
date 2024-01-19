import Favorites from "./Favorites";
import TrendingMovies from "./TrendingMovies";
import TrendingShows from "./TrendingShows";

function HomePage() {
  

  return (
    <div className="bg-[#000000]">
      <div className="container mx-auto px-6 py-2 text-white">
        <Favorites />
        <TrendingMovies />
        <TrendingShows />
      </div>
    </div>
  );
}

export default HomePage;
