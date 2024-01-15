import axios from "axios";

const APIKey = "2c24297ec7388147898fc3d5f711bdb8";

export const getMovieByID = async (id) => {
  let result = {};
  await axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}`)
    .then((res) => {
      result = res.data;
    })
    .catch((e) => {
      result = e;
    });
  return result;
};
