const request = require('request');

const retrieve = (name,callback)=>{

    if(name==null){
      return callback({error:"Please enter a Name!"});
    }
    const options = {
        method: 'GET',
        url: 'https://jikan1.p.rapidapi.com/search/anime',
        qs: {q: name},
        headers: {
          'x-rapidapi-key': 'fdaa07a5c5mshbc0f8e7a33c9ba4p10d7a0jsn3e7c319e0bd9',
          'x-rapidapi-host': 'jikan1.p.rapidapi.com',
          useQueryString: true
        }
      };
      
      request(options, (error,response)=>{
          if (error) {
            return callback({error:"Internal Server Error"});
          }
          response = JSON.parse(response.body);
          if(!response.results){
            return callback({error:"Anime details not found!! Please try another search.."});
          }
          return callback(response.results);
      });

}

module.exports = retrieve;
