import axios from "axios";

const APIKey = "2c24297ec7388147898fc3d5f711bdb8";

// &append_to_response=videos

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

export const getTrendingMovies = async () => {
  let results = {};
  await axios
    .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${APIKey}`)
    .then((res) => {
      results = res.data.results;
    })
    .catch((e) => {
      results = e;
    });
  return results;
};

export const getTrendingShows = async () => {
  let results = {};
  await axios
    .get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${APIKey}`)
    .then((res) => {
      results = res.data.results;
    })
    .catch((e) => {
      results = e;
    });
  return results;
};

export const getMovieOfTheWeek = async () => {
  let result = {};
  await axios
    .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}`)
    .then((res) => {
      result = res.data.results[0];
    })
    .catch((e) => {
      result = e;
    });
  return result;
};

export const getShowOfTheWeek = async () => {
  let result = {};
  await axios
    .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${APIKey}`)
    .then((res) => {
      result = res.data.results[0];
    })
    .catch((e) => {
      result = e;
    });
  return result;
};

export const search = async (type, query, page) => {
  let results = {};
  await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=${APIKey}&query=${query}&certification.lte=R&page=${page}`)
  .then((res) => {
    results = res.data;
  })
  .catch((e) => {
    results = e;
  })
  return results;
}
