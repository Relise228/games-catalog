import axios from 'axios';

const API_KEY = 'a6a25bd8e50e4b40a94b64245cb04181';
const instance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {
    'Content-Type': 'application/json'
  },
  responseType: "json"
})


export const gamesAPI = {
  getAllGames: () => instance.get(`games?key=${API_KEY}`).then(response => response.data),
}
