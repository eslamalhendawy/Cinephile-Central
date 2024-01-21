import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

function MediaGrid({ item, type }) {
  return (
    <div className="grid items-stretch grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-6">
      {item.map((item, index) => {
        return (
          <Link to={`/${type}/${item.id}`} key={index}>
            <div className="h-full flex flex-col">
              <div className="flex-1 mb-1">{item.poster_path == null ? <div className="bg-[#121212] h-full flex justify-center items-center border-4 border-white">No Poster Found</div> : <img className="border-4 border-white h-full" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />}</div>
              <p data-tooltip-id="my-tooltip" data-tooltip-content={type == "movie" ? item.title : item.name} data-tooltip-place="top" className="text-lg font-medium truncate">
                {type == "movie" ? item.title : item.name}
              </p>
              <Tooltip style={{ fontSize: "18px" }} id="my-tooltip" />
              <p className="text-lg font-medium">{type == "movie" ? item.release_date.split("-")[0] : item.first_air_date.split("-")[0]}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MediaGrid;
