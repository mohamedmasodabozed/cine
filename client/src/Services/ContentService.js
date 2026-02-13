import axios from "axios";
let baseUrl = "http://localhost:5030/api";
function getMovies() {
  let data = axios.get(`${baseUrl}/movies`).then((res) => res.data);
  return data;
}
function getTvShows() {
  let data = axios.get(`${baseUrl}/movies/shows`).then((res) => res.data);
  return data;
}
function getAnime() {
  let data = axios
    .get(
      `${baseUrl}/Anime`,
    )
    .then((res) => res.data);
  return data;
}
export { getMovies, getTvShows, getAnime };
