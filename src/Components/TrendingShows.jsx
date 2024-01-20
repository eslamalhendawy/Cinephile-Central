import { useEffect, useState } from "react";
import { getTrendingShows } from "../Services/APICalls";
import ShowSlider from "./ShowSlider";

function TrendingShows() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchList = async () => {
      let temp = await getTrendingShows();
      setList(temp);
    };
    fetchList();
  }, []);
  return (
    <div>
      <h1 className="text-[#f3c531] font-bold text-2xl sm:text-3xl mb-6">Trending TV Shows</h1>
      <ShowSlider list={list} />
    </div>
  );
}

export default TrendingShows;
