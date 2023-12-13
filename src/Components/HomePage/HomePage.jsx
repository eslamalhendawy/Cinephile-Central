import Carousel from "../Carousel/Carousel";
import Trending from "../Trending/Trending";
import Popular from "../Popular/Popular";

function HomePage() {
  return (
    <div>
      <Carousel />
      <Trending />
      <Popular />
    </div>
  )
}

export default HomePage