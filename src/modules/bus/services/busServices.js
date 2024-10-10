import  request from '../../../utils/request';
import api from '../../../endpoints';

export const getTrips = () => {
  const options = {
    ...api.getTrips
  };
  
  return request(options);
};