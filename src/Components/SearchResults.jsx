import { useEffect, useState } from "react";
import { search } from "../Services/APICalls";
import ReactPaginate from "react-paginate";
import Skeleton from "@mui/material/Skeleton";

function SearchResults() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPages, setNumberPages] = useState(0);
  const [resCount, setResCount] = useState();
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [fetching, setFetching] = useState(true);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    let currentURL = window.location.href;
    let decodedURL = decodeURIComponent(currentURL);
    let parts = decodedURL.split("/");
    const searchTerm = parts[parts.length - 1];
    setTitle(searchTerm);
    const type = parts[parts.length - 2];
    setType(type);
    const fetchData = async () => {
      let temp = await search(type, searchTerm, currentPage);
      setResults(temp.results);
      setResCount(temp.total_results);
      setNumberPages(temp.total_pages);
      setFetching(false);
    };
    fetchData();
  }, [currentPage]);
  return (
    <div className="bg-black minHeight">
      <div className="container mx-auto px-6 py-2 text-white">
        <h2 className="text-[#f3c531] font-bold text-2xl sm:text-3xl mt-6 mb-3">Searching For &quot;{title}&quot;</h2>
        <p className="mb-3 font-medium text-lg">{resCount} Results Found</p>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-6">
          {fetching
            ? "Searching..."
            : results.map((item, index) => {
                return (
                  <div key={index}>
                    <div className=" mb-1">{item.poster_path == null ? <div className="bg-[#121212] max-w-[290px] h-[180px] sm:h-[320px] lg:h-[400px] flex justify-center items-center border-4 border-white">No Poster Found</div> : <img className="border-4 border-white" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />}</div>
                    <p className="text-lg font-medium truncate">{type == "movie" ? item.title : item.name}</p>
                    {/* <p className="text-lg font-medium">{item.release_date.split("-")[0]}</p> */}
                    <p className="text-lg font-medium">{type == "movie" ? item.release_date.split("-")[0] : item.first_air_date.split("-")[0]}</p>
                  </div>
                );
              })}
        </div>
        <div className="flex justify-center items-center">{results.length == 0 ? "" : <ReactPaginate className="text-white font-bold flex gap-2 text-xl " breakLabel="..." nextLabel=">" pageCount={numberPages} pageRangeDisplayed={1} previousLabel="<" onPageChange={handlePageChange} activeClassName={"active"} containerClassName={"pagination"} />}</div>
      </div>
    </div>
  );
}

export default SearchResults;
