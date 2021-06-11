import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/roomsConstants";
import { HYDRATE } from "next-redux-wrapper";

//All rooms reducer
export const allRoomReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ALL_ROOMS_SUCCESS:
      return {
        roomCount: action.payload.roomCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: actions.payload.rooms,
      };

    case ALL_ROOMS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
