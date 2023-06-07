import axios from 'axios';
import { GET_DESTINIES, GET_DETAIL, PUT_DESTINY, GET_SEARCH } from '../utils/constants';
import { PORT } from '../utils/constants';

export function getDestinies() {
  return async function (dispatch) {
    const json = await axios.get(`${PORT}/destinies/`);
    console.log("toy aca probando S SDFSDFSDFSDF", json.data.data);
    return dispatch({
      type: GET_DESTINIES,
      payload: json.data,
    });
  }
}

export function getDetailById(_id) {
  return async function (dispatch) {
      const json = await axios.get(`${PORT}/destiny/${_id}`)
      // console.log("quiero ver si llega bien la info del id", json.data)
      return dispatch({
        type: GET_DETAIL,
        payload: json.data.data
      })
  };
}

export function deleteDestiny(_id) {
  return async function () {    
    try {
      const json = await axios.delete(`${PORT}/delete/${_id}`)
      return json
    } catch (error) {
      throw error
    }
  }
}

export function createDestiny(info){
  return async function(){
    try {
      const json = await axios.post(`${PORT}/create`, info)
      return json
    } catch (error) {
      console.log(error)  
    }
  }
}

export function updateDestiny(info){
  console.log(info, "aca estoy en las actions con el put")
  return async function(dispatch){
    try {
      const json = await axios.put(`${PORT}/update/${info.id}`, info)
      return dispatch({
        type: PUT_DESTINY,
        payload: json.data,
      })
    } catch (error) {
      console.log(error)
    }
  }
}
