import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Tooltip } from "react-tooltip";
import "swiper/css";
import "swiper/css/pagination";

function MovieSlider({ list }) {
  return (
    <Swiper
      className="mb-6 "
      slidesPerGroup={1}
      spaceBetween={15}
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
          slidesPerGroup: 2,
        },
      }}
    >
      {list.map((movie, index) => {
        return (
          <SwiperSlide className="mb-12" key={index}>
            <Link to={`/movie/${movie.id}`}
            >
              <div className="group cursor-pointer">
                <div>{movie.poster_path == null ? <div className="bg-[#121212] max-w-[290px] h-[180px] sm:h-[320px] lg:h-[400px] flex justify-center items-center">No Poster Found</div> : <img className="max-w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />}</div>
                <div className="bg-[#1a1a1a] p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-star text-[#f3c531]"></i>
                    <p className="text-white">{movie.vote_average.toFixed(1)}</p>
                  </div>
                  <p data-tooltip-id="my-tooltip" data-tooltip-content={movie.title} data-tooltip-place="top" className="text-white text-center text-lg font-medium mb-2 truncate">
                    {movie.original_title}
                  </p>
                  <Tooltip style={{ fontSize: "18px" }} id="my-tooltip" />
                  <p className="bg-[#2c2c2c] group-hover:bg-[#30353c] duration-300 p-2 text-center text-[#5e99ed] font-bold cursor-pointer">More Info</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MovieSlider;
