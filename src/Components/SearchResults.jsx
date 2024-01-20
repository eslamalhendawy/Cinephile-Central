import { useEffect, useState } from "react";
import { search } from "../Services/APICalls";
import ReactPaginate from "react-paginate";
import Skeleton from "@mui/material/Skeleton";
import MediaGrid from "./MediaGrid";

function SearchResults() {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPages, setNumberPages] = useState(0);
  const [resCount, setResCount] = useState();
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.title = `Cinephile Central | Search`;
    window.scrollTo(0, 0);
  },[])

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setFetching(true);
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
        <div>
          {fetching ? (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-6">
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton sx={{bgcolor: "#121212"}} variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
                <Skeleton sx={{bgcolor: "#121212"}} variant="text" animation="wave" />
              </div>
            </div>
          ) : (
            <MediaGrid item={results} type={type} /> 
          )}
        </div>
        <div className="flex justify-center items-center">{results.length == 0 ? "" : <ReactPaginate className="text-white font-bold flex gap-2 text-xl " breakLabel="..." nextLabel=">" pageCount={numberPages} pageRangeDisplayed={1} previousLabel="<" onPageChange={handlePageChange} activeClassName={"active"} containerClassName={"pagination"} />}</div>
      </div>
    </div>
  );
}

export default SearchResults;
