import { useEffect, useState } from "react";
import { getMoviesByGenre } from "../Services/APICalls";
import MovieSlider from "./MovieSlider";

function Movies() {

  useEffect(() => {
    document.title = "Cinephile Central | Movies";
    window.scrollTo(0, 0);
  }, [])

  const [action, setAction] = useState();
  const [adventure, setAdventure] = useState();
  const [animation, setAnimation] = useState();
  const [comedy, setComedy] = useState();
  const [drama, setDrama] = useState();
  const [fantasy, setFantasy] = useState();
  const [horror, setHorror] = useState();
  const [mystery, setMystery] = useState();
  const [romance, setRomance] = useState();
  const [science, setScience] = useState();
  const [war, setWar] = useState();
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      let action = await getMoviesByGenre(28);
      setAction(action.data.results);
      let adventure = await getMoviesByGenre(12);
      setAdventure(adventure.data.results);
      let animation = await getMoviesByGenre(16);
      setAnimation(animation.data.results);
      let comedy = await getMoviesByGenre(35);
      setComedy(comedy.data.results);
      let drama = await getMoviesByGenre(18);
      setDrama(drama.data.results);
      let fantasy = await getMoviesByGenre(14);
      setFantasy(fantasy.data.results);
      let horror = await getMoviesByGenre(27);
      setHorror(horror.data.results);
      let mystery = await getMoviesByGenre(9648);
      setMystery(mystery.data.results);
      let romance = await getMoviesByGenre(10749);
      setRomance(romance.data.results);
      let science = await getMoviesByGenre(878);
      setScience(science.data.results);
      let war = await getMoviesByGenre(10752);
      setWar(war.data.results);
      setFetching(false);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#000000] minHeight">
      <div className="container mx-auto px-6 py-2 text-white">
        {fetching ? (
          ""
        ) : (
          <>
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Drama Movies</h1>
            <MovieSlider list={drama} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Action Movies</h1>
            <MovieSlider list={action} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Adventure Movies</h1>
            <MovieSlider list={adventure} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest War Movies</h1>
            <MovieSlider list={war} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Fantasy Movies</h1>
            <MovieSlider list={fantasy} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Science Fiction Movies</h1>
            <MovieSlider list={science} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Horror Movies</h1>
            <MovieSlider list={horror} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Mystery Movies</h1>
            <MovieSlider list={mystery} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Romance Movies</h1>
            <MovieSlider list={romance} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Comedy Movies</h1>
            <MovieSlider list={comedy} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Animation Movies</h1>
            <MovieSlider list={animation} />
          </>
        )}
      </div>
    </div>
  );
}

export default Movies;
