export const exerciseOptions =  {
  method: 'GET',
  headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '8ac7723d8fmsh94da9e10d1afeacp1e18c6jsna04582e87ac8',
      //'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
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




export const fetchData = async (url, options)=> {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}