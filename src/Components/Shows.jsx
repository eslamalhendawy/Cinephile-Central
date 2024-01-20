import { useEffect, useState } from "react";
import { getShowsByGenre } from "../Services/APICalls";
import ShowSlider from "./ShowSlider";

function Shows() {
  useEffect(() => {
    document.title = "Cinephile Central | TV Shows";
    window.scrollTo(0, 0);
  }, [])

  const [fetching, setFetching] = useState(true);
  const [drama, setDrama] = useState();
  const [action, setAction] = useState();
  const [animation, setAnimation] = useState();
  const [comedy, setComedy] = useState();
  const [mystery, setMystery] = useState();
  const [science, setScience] = useState();
  const [war, setWar] = useState();
  const [crime, setCrime] = useState();
  const [family ,setFamily] = useState();
  const [kids, setKids] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let drama = await getShowsByGenre(18);
      setDrama(drama.data.results);
      let action = await getShowsByGenre(10759);
      setAction(action.data.results);
      let animation = await getShowsByGenre(16);
      setAnimation(animation.data.results);
      let comedy = await getShowsByGenre(35);
      setComedy(comedy.data.results);
      let mystery = await getShowsByGenre(9648);
      setMystery(mystery.data.results);
      let science = await getShowsByGenre(10765);
      setScience(science.data.results);
      let war = await getShowsByGenre(10768);
      setWar(war.data.results);
      let crime = await getShowsByGenre(80);
      setCrime(crime.data.results);
      let family = await getShowsByGenre(10751);
      setFamily(family.data.results);
      let kids = await getShowsByGenre(10762);
      setKids(kids.data.results);
      setFetching(false);
    }
    fetchData();
  }, [])

  return (
    <div className="bg-[#000000] minHeight">
      <div className="container mx-auto px-6 py-2 text-white">
        {fetching ? "" : (
          <>
           <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Drama TV Shows</h1>
            <ShowSlider list={drama} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Action TV Shows</h1>
            <ShowSlider list={action} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Mystery TV Shows</h1>
            <ShowSlider list={mystery} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Crime TV Shows</h1>
            <ShowSlider list={crime} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest War TV Shows</h1>
            <ShowSlider list={war} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Science Fiction TV Shows</h1>
            <ShowSlider list={science} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Family TV Shows</h1>
            <ShowSlider list={family} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Comedy TV Shows</h1>
            <ShowSlider list={comedy} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Animation TV Shows</h1>
            <ShowSlider list={animation} />
            <h1 className="text-[#f3c531]  font-bold text-2xl my-6">Latest Kids TV Shows</h1>
            <ShowSlider list={kids} />
          </>
        )}
      </div>
    </div>
  )
}

export default Shows