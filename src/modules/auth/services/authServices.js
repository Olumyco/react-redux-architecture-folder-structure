import  request from '../../../utils/request';
import api from '../../../endpoints';

export const postLoginCredentials = data => {
  const options = {
    ...api.postLoginCredentials,
    data
  };
  
  return request(options);
};