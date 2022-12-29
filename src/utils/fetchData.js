export const exerciseOptions =  {
 
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '38a288709cmshd45fb335362a8b0p153ae1jsn5063c3b58d3f',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  
};
 export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8ac7723d8fmsh94da9e10d1afeacp1e18c6jsna04582e87ac8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    //'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_KEY,
  }
};



// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });




export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};