import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  Room_Details_SUCCESS,
  Room_Details_FAIL,
  CLEAR_ERRORS,
} from "../constants/roomsConstants";

//GET all rooms
export const getRooms = (req, currentPageNumber = 1) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    
    const { data } = await axios.get(`${origin}/api/rooms?page=${currentPageNumber}`);

    
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      error: error.response.data.message,
    });
  }
};




//GET room details 
export const getRoomDetails = (req, id) => async(dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    const { data } = await axios.get(`${origin}/api/rooms/${id}`)

    dispatch({
      type: Room_Details_SUCCESS,
      payload: data.room
    })
    console.log(data)
  } catch (error) {
    dispatch({
      type: Room_Details_FAIL,
      error: error.response.data.message,
    });
  }
}


//Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};