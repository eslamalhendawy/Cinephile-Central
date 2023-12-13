import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
function Carousel() {
  const favourites = [
    {
      num: 1,
      name: "Fight Club",
      posterURL: "pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    },
    {
      num: 2,
      name: "Se7en",
      posterURL: "6yoghtyTpznpBik8EngEmJskVUO.jpg",
    },
    {
      num: 3,
      name: "Interstellar",
      posterURL: "gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    },
    {
      num: 4,
      name: "Inception",
      posterURL: "oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
    {
      num: 5,
      name: "The Dark Knight",
      posterURL: "qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
      num: 6,
      name: "The Prestige",
      posterURL: "tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
    },
    {
      num: 7,
      name: "The Godfather",
      posterURL: "3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    },
    {
      num: 8,
      name: "Shawshank Redemption",
      posterURL: "q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-4 sm:px-12 py-4">
     <h2 className="text-center text-white font-bold text-xl md:text-4xl mb-4">My Personal Favourites</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {favourites.map((movie) => {
          return (
            <SwiperSlide key={movie.num} className="cursor-pointer group">
              <h3 className="whitespace-nowrap duration-300 group-hover:bg-[#E29E21] absolute bottom-10 left-4 md:left-1 lg:left-2 xl:left-4 font-bold text-white md:text-lg p-1 bg-[#E29E21]/75 rounded-md">{movie.name}</h3>
              <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w400/${movie.posterURL}`} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Carousel;
