import PopularMovie from "./PopularMovie";
import PopularShow from "./PopularShow";

function Popular() {
  return (
    <div className="lg:max-w-full mx-auto container text-white">
      <div className="mx-auto p-8 bg-[#020d18]">
        <PopularMovie />
        <PopularShow />
      </div>
    </div>
  );
}

export default Popular;
