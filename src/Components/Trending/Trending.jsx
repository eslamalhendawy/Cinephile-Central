import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Trending() {
  const moviesURL = "https://api.themoviedb.org/3/discover/movie?api_key=2c24297ec7388147898fc3d5f711bdb8";
  const tvURL = "https://api.themoviedb.org/3/discover/tv?api_key=2c24297ec7388147898fc3d5f711bdb8";
  const [movieList, setMovieList] = useState([]);
  const [showList, setshowList] = useState([]);
  const getMovies = async () => {
    await axios.get(moviesURL).then((res) => setMovieList(res.data.results));
  };
  const getShows = async () => {
    await axios.get(tvURL).then((res) => setshowList(res.data.results));
  };
  useEffect(() => {
    getMovies();
    getShows();
  }, []);
  return (
    <div className="lg:max-w-full mx-auto container">
      <div className="mx-auto p-8 bg-[#020d18]">
        <h2 className="text-white text-xl md:text-4xl mb-4 font-bold">Trending Movies</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            425: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {movieList.map((movie) => {
            return (
              <SwiperSlide key={movie.id} className="cursor-pointer group">
                <span className="text-white rounded-md font-bold p-2 bg-[#E29E21]/75 duration-300 group-hover:bg-[#E29E21] absolute bottom-4 left-1 text-xs inline-block w-fit">{movie.original_title}</span>
                <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <h2 className="text-white text-xl md:text-4xl my-4 font-bold">Trending TV Shows</h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={2}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            425: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {showList.map((show) => {
            return (
              <SwiperSlide key={show.id} className="cursor-pointer group">
                <span className="text-white rounded-md font-bold p-2 bg-[#E29E21]/75 duration-300 group-hover:bg-[#E29E21] absolute bottom-4 left-1 text-xs inline-block w-fit">{show.original_name}</span>
                <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w400${show.poster_path}`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Trending;
