import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '16a2062ef4msh3312714f6d2d9afp1aeb9fjsn15e6aac8a289',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log('DATA==>', data)

    return data;
}