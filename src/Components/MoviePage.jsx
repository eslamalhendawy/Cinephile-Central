import { useEffect, useState } from "react";
import { getMoviePageDate } from "../Services/APICalls";
import { getMoviesByGenre } from "../Services/APICalls";
import MovieSlider from "./MovieSlider";

function MoviePage() {
  const [movie, setMovie] = useState();
  const [similar, setSimilar] = useState(null);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.title = `Cinephile Central | ${fetching ? "" : movie.title}`;
    window.scrollTo(0, 0);
  }, [movie])

  useEffect(() => {
    setFetching(true);
    let currentURL = window.location.href;
    let decodedURL = decodeURIComponent(currentURL);
    let parts = decodedURL.split("/");
    const id = parts[parts.length - 1];
    const fetchData = async () => {
      let temp = await getMoviePageDate(id);
      console.log(temp);
      let tempRuntime = temp.runtime;
      let hours = Math.floor(tempRuntime / 60);
      setHours(hours);
      let minutes = tempRuntime % 60;
      setMinutes(minutes);
      setMovie(temp);
      setFetching(false);
    };
    fetchData();
    const fetchSimilar = async () => {
      if (fetching) {
        return;
      } else {
        let temp = await getMoviesByGenre(movie.genres[0].id);
        setSimilar(temp.data.results);
      }
    };
    fetchSimilar();
  }, [fetching]);
  return (
    <div className="bg-white">
      {fetching ? (
        ""
      ) : (
        <>
          <div className="bg-cover bg-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
            <div className="bg-[#1f1f1f]/90 backdrop-blur-md">
              <div className="container mx-auto px-6 py-2 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h2 className="text-3xl">{movie.title}</h2>
                    <div className="flex items-center gap-2">
                      <p className="text-lg">({movie.release_date.split("-")[0]})</p>
                      <p className="text-lg">
                        {hours}h {minutes}m
                      </p>
                    </div>
                  </div>
                  <div className="sm:flex items-center gap-2">
                    <div className="flex items-center mb-1 sm:mb-0">
                      <i className="fa-solid fa-star text-[#f3c531]"></i>
                      <p>{movie.vote_average.toFixed(1)}</p>
                    </div>
                    <p>
                      Based On <span className="text-[#f3c531] font-bold">{movie.vote_count}</span> Votes
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 items-stretch mb-4">
                  <div>
                    <img className="sm:max-w-[250px] lg:max-w-[300px]" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                  </div>
                  <div className="w-full relative group">
                    <a href={`https://www.youtube.com/watch?v=${movie.videos.results[movie.videos.results.length - 1].key}`}>
                      <img className="h-full" src={`https://image.tmdb.org/t/p/original${movie.images.backdrops[1].file_path}`} alt="" />
                      <div className="absolute top-0 right-0 flex justify-center items-center w-full h-full bg-black/80">
                        <p className="text-xl font-semibold group-hover:text-[#f3c531] duration-300">Watch Trailer</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start gap-2 mb-4">
                  {movie.genres.map((data, index) => {
                    return (
                      <p className="font-semibold py-1 px-3 border border-white rounded-xl text-sm sm:text-base whitespace-nowrap" key={index}>
                        {data.name}
                      </p>
                    );
                  })}
                </div>
                <p className="mb-2 font-medium lg:text-lg">&quot;{movie.tagline}&quot;</p>
                <h3 className="text-[#f3c531] font-semibold text-lg lg:text-xl mb-1">Overview</h3>
                <p className="font-medium lg:max-w-[75%] lg:text-lg mb-2">{movie.overview}</p>
                <p className="border-b border-gray-500 mb-2"></p>
                <h3 className="text-[#f3c531] font-semibold text-lg lg:text-xl mb-1">Staring</h3>
                <div className="flex gap-2 text-[#5e99ed] lg:text-lg mb-2">
                  <p>{movie.credits.cast[0].name}</p>
                  <p>{movie.credits.cast[1].name}</p>
                  <p>{movie.credits.cast[2].name}</p>
                </div>
                <p className="border-b border-gray-500 mb-2"></p>
                <div className=" items-center justify-between sm:justify-normal sm:gap-x-40">
                  <h3 className="text-[#f3c531] font-semibold text-lg lg:text-xl mb-1">Official Site</h3>
                  <a className="text-[#5e99ed] hover:text-[#45638d] duration-300 lg:text-lg" href={movie.homepage}>
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6 py-4">
            <h3 className="text-[#212121] font-semibold text-3xl mb-1 border-l-4 pl-2 border-[#f3c531]">Photos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {movie.images.backdrops.slice(0, 6).map((image, index) => {
                return (
                  <div key={index}>
                    <img src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt="" />
                  </div>
                );
              })}
            </div>
            <h3 className="text-[#212121] font-semibold text-3xl mb-2 border-l-4 pl-2 border-[#f3c531]">Video Links</h3>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mb-6">
              {movie.videos.results.slice(0, 6).map((video, index) => {
                return (
                  <div key={index}>
                    <a className="text-[#5e99ed] hover:text-[#45638d] duration-300 lg:text-lg" href={`https://www.youtube.com/watch?v=${video.key}`}>
                      {video.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <h3 className="text-[#212121] font-semibold text-3xl mb-2 border-l-4 pl-2 border-[#f3c531]">Similar Movies</h3>
            {similar == null ? "" : <MovieSlider list={similar} />}
          </div>
        </>
      )}
    </div>
  );
}

export default MoviePage;
