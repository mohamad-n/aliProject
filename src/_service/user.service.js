import axios from 'axios';
import {config} from './../_config/config';
export const userService = {
  list,
};
async function list() {
  const axiosRequest = axios.create({
    baseURL: config.endPointUrl,
  });

  let method = 'GET';
  let url = '/users';
  let headers = {
    Accept: 'application/json',
  };

  return axiosRequest({method, url, headers})
    .then(response => {
      return handleAxiosResponse(response);
    })
    .catch(error => {
      return handleAxiosResponse(error.response);
    });
}

function handleAxiosResponse(response) {
  console.log(response.message);
  return new Promise((resolve, reject) => {
    // const data = response;
    // lof
    switch (Math.floor(response.status / 100)) {
      case 2:
        return resolve(response.data);
      case 4:
        return reject('unknown Error');
      case 5:
        return reject('Server Error');
      default:
        return reject('uUknown Error');
    }
  });
}
