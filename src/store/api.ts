import axios from 'axios';

export const fetchResult = (queryData: any) => {
  return axios
    .get('http://localhost:3001/film_list', {
      params: {
        emotions: queryData[0],
      },
    })
    .then(function (response) {
      return response;
    });
};
