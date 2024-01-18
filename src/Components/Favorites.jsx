import { useEffect, useState } from "react";
import { getMovieByID } from "../Services/APICalls";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function Favorites() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getFavourites = async () => {
      let intersteller = await getMovieByID(157336);
      let inception = await getMovieByID(27205);
      let prestige = await getMovieByID(1124);
      let batman = await getMovieByID(155);
      let fightClub = await getMovieByID(550);
      let seven = await getMovieByID(807);
      let godfather = await getMovieByID(238);
      let castAway = await getMovieByID(8358);
      let mail = await getMovieByID(9489);
      let shawshank = await getMovieByID(278);
      let mist = await getMovieByID(5876);
      let angryMen = await getMovieByID(389);
      let goodWill = await getMovieByID(489);
      let benjamin = await getMovieByID(4922);
      let blade = await getMovieByID(335984);
      setMovies([inception, prestige, batman, fightClub, seven, godfather, castAway, intersteller, mail, shawshank, mist, angryMen, goodWill, benjamin, blade]);
    };
    getFavourites();
  }, []);

  return (
    <div>
      <h1 className="text-[#f3c531] font-bold text-3xl text-center my-6">My Personal Favorites</h1>
      <div className="flex gap-6 items-center">
        <Swiper className="mb-6 basis-3/4 hidden lg:block" navigation={true} modules={[Navigation]}>
          {movies.map((movie, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={`mx-12 flex justify-center items-center relative bg-cover p-6 rounded-xl`}>
                  <div className="hidden lg:block">
                    <img className="rounded-xl" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                  </div>
                  <div className="absolute bottom-10 left-10 flex flex-row-reverse items-center">
                    <div className="flex flex-col gap-3 p-2">
                      <h2 className="text-lg xl:text-xl font-bold text-nowrap p-2 bg-white/90 text-[#f3c531] rounded-lg w-fit">{movie.original_title}</h2>
                      <p className="bg-white/90 xl:text-lg font-medium text-nowrap w-[85%] p-2 rounded-lg text-black">{movie.tagline}</p>
                    </div>
                    <img className="rounded-xl max-w-[150px] xl:max-w-[200px]" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="lg:basis-1/4">
          <h3 className="font-bold text-xl lg:text-2xl text-center lg:text-left text-[#f3c531] mb-8">Explore my top movie picks in the favorites section</h3>
          <p className="text-lg 2xl:text-xl text-center lg:text-left font-semibold mb-6">A curated showcase of films that have profoundly impacted me. From timeless classics to contemporary gems, each movie comes with brief reflections, giving you a glimpse into my cinematic journey. </p>
        </div>
      </div>
      <Swiper className="mb-6 basis-3/4 block lg:hidden" navigation={true} modules={[Navigation]}>
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={`mx-12 flex justify-center items-center relative bg-cover p-6 rounded-xl`}>
                <div className="hidden lg:block">
                  <img className="rounded-xl" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                </div>
                <div className="relative lg:absolute z-10 top-0">
                  <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Favorites;