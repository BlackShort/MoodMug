import axios from "axios";

const BASE_URL = 'https://spotify23.p.rapidapi.com/search';

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/search/',
  params: {
    q: 'latest',
    type: 'multi',
    offset: '0',
    limit: '1',
    numberOfTopResults: '5'
  },
  headers: {
    'X-RapidAPI-Key': '183b0037c1mshc2b8514eabdcb63p189f94jsnf585d7539420',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(data);
  return data;
}



