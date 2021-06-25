import {
  ALL_ROOMS_FAIL,
  ALL_ROOMS_SUCCESS,
  Room_Details_SUCCESS,
  Room_Details_FAIL,

  CLEAR_ERRORS,
} from "../constants/roomsConstants";

//All rooms reducer
export const allRoomsReducer = (state = { rooms: [] }, action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,
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


// Single room
export const roomDetailsReducer = (state = { room: {} }, action) => {
  switch (action.type) {
    case Room_Details_SUCCESS:
      return {
        room: action.payload
      }

    case Room_Details_FAIL:
      return {
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state
  }
}