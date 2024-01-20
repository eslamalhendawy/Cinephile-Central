import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShowOfTheWeek } from "../Services/APICalls";

function ShowOfTheWeek() {
  const [show, setShow] = useState("");
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let temp = await getShowOfTheWeek();
      setShow(temp);
      setFetching(false);
    };
    fetchData();
  }, []);

  return (
    <div className="mb-6">
      <h1 className="text-[#f3c531] font-bold text-2xl sm:text-3xl mb-6">TV Show Of The Week</h1>
      <div className="flex flex-col md:flex-row md:gap-4 items-center">
        <div className="mb-2">{fetching ? "fetching" : <img className="md:max-w-[300px] xl:max-w-[400px]" src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt="" />}</div>
        <div>
          {fetching ? (
            "Fetching"
          ) : (
            <>
              <div className="md:flex ml-2 gap-2">
                <h3 className="text-center text-xl sm:text-2xl font-semibold mb-2">{show.title}</h3>
                <div className="flex items-center justify-center md:justify-normal text-xl md:font-semibold gap-2 mb-2">
                  <i className="fa-solid fa-star text-[#f3c531]"></i>
                  <p>{show.vote_average.toFixed(1)}</p>
                </div>
              </div>
              <p className="text-lg ml-2 hidden md:block mb-12 lg:w-[80%]">{show.overview}</p>
              <Link to={`/tv/${show.id}`}>
                <p className="w-fit ml-auto  border-b-2 text-xl font-bold hover:text-[#f3c531] duration-300 border-[#f3c531] cursor-pointer hidden md:block">TV Show Page</p>
              </Link>
              <Link to={`/tv/${show.id}`}>
                <p className="bg-[#2c2c2c] w-[250px] group-hover:bg-[#30353c] duration-300 p-2 sm:text-xl text-center text-[#5e99ed] font-bold cursor-pointer md:hidden">TV Show Page</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowOfTheWeek;
