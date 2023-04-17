import axios from 'axios';

export const fetchResult = (queryData: any) => {
  console.log(queryData.join());

  return axios
    .get('http://localhost:5000/film_list', {
      params: {
        query: queryData.join(),
      },
    })
    .then(function (response) {
      return response;
    });
};
