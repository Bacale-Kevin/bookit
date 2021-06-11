import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomsConstants";

//GET all rooms
export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    console.log("ORIGIN -->", origin);
    const { data } = await axios.get(`${origin}/api/rooms`);
    // console.log({ data });
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
      console.log('ROOMACTIONERROR -->', error.message)
    dispatch({
      type: ALL_ROOMS_FAIL,
      error: error.response.data.message,
    });
  }
};

//Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
