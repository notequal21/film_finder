import axios from 'axios';

export const fetchResult = (queryData: any) => {
  console.log(queryData.join());

  return (
    axios
      // .get('http://localhost:5000/film_list', {
      //   params: {
      //     query: queryData.join(),
      //   },
      // })
      .post('http://localhost:5000/query', {
        query: queryData,
      })
      .then(function (response) {
        return response;
      })
  );
};
