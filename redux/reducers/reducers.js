import { combineReducers } from "redux";

import { allRoomsReducer, roomDetailsReducer } from "./roomsReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
});

export default reducer;
