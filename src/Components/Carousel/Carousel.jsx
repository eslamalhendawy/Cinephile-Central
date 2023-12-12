import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel() {
  const [num, setNum] = useState(4);

  const favourites = [
    {
      num: 1,
      name: "Fight Club",
      posterURL: "pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
    },
    {
      num: 2,
      name: "Se7en",
      posterURL: "6yoghtyTpznpBik8EngEmJskVUO.jpg"
    },
    {
      num: 3,
      name: "Interstellar",
      posterURL: "gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },
    {
      num: 4,
      name: "Inception",
      posterURL: "oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
    },
    {
      num: 5,
      name: "The Dark Knight",
      posterURL: "qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      num: 6,
      name: "The Prestige",
      posterURL: "tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg"
    },
    {
      num: 7,
      name: "The Godfather",
      posterURL: "3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },
    {
      num: 8,
      name: "The Shawshank Redemption",
      posterURL: "q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNum(3);
      } else if (window.innerWidth <= 640) {
        setNum(2);
      } else if (window.innerWidth <= 425) {
        setNum(1);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: num,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-4 sm:px-12 py-4">
      <Slider {...settings}>
      {favourites.map((movie) => {
        return (
          <div key={movie.num}>
          <h3>{movie.name}</h3>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.posterURL}`} alt="" />
          </div>
        )
      })}
      </Slider>
    </div>
  );
}

export default Carousel;
