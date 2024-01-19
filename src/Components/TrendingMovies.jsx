import { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { getTrendingMovies } from "../Services/APICalls";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
      <Swiper
        className="mb-6"
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
              <div className="group cursor-pointer">
                <div>
                  <img className="h-[250px] md:h-[430px]" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                </div>
                <div className="bg-[#1a1a1a] p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-star text-[#f3c531]"></i>
                    <p>{movie.vote_average.toFixed(1)}</p>
                  </div>
                  <p data-tooltip-id="my-tooltip" data-tooltip-content={movie.title} data-tooltip-place="top" className="text-center text-lg font-medium mb-2 truncate">
                    {movie.original_title}
                  </p>
                  <Tooltip style={{fontSize: "18px"}} id="my-tooltip" />
                  <p className="bg-[#2c2c2c] group-hover:bg-[#30353c] duration-300 p-2 text-center text-[#5e99ed] font-bold cursor-pointer">More Info</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default TrendingMovies;
