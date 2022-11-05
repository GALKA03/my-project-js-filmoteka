const axios = require('axios').default;
export {fechMuviQueri}
  const URL = 'https://api.themoviedb.org/3/search/movie'
  const API = 'api_key=a1426f875d9b25aa0fd82fb82639d8ae'

async function fechMuviQueri(query, page) {
  const FILTER = `&query=${query}&page=${page}&language=en-US`
  //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
  return await axios.get(`${URL}?${API}${FILTER}`)
   .then(response => response.data)
}
//${URL}?${API}${FILTER}
 //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

