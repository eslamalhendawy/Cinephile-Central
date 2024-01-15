import { useEffect, useState } from "react";
import { getMovieByID } from "../Services/APICalls";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

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
      console.log(castAway);
      setMovies([inception, prestige, batman, fightClub, seven, godfather, castAway, intersteller]);
    };
    getFavourites();
  }, []);

  return (
    <div>
      <h1 className="text-[#f3c531] font-bold text-2xl text-center my-6">My Personal Favorites</h1>
      <Swiper
        className="mb-6"
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={`mx-12 flex justify-center items-center relative bg-cover p-6 rounded-xl`}>
                <div className="hidden lg:block">
                  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
                </div>
                <div className="relative lg:absolute z-10 top-0">
                  <h2 className="absolute bottom-12 left-[10%] text-lg font-bold text-nowrap p-2 bg-white text-[#f3c531] w-fit">{movie.original_title}</h2>
                  <img className="rounded-xl max-w-[150px]" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
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
