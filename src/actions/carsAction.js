import {
  FETCH_CARS
} from './actionType';

const baseurl = 'https://automart2019.herokuapp.com'
export const fetchCars = (url = `${baseurl}/api/v1/car?status=available`) => dispatch => fetch(url, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_CARS,
    payload: data,
  }));
