import { combineReducers } from "redux";

import { allRoomsReducer, roomDetailsReducer } from "./roomsReducers";
import { authReducer } from './usersReducers';

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer
});

export default reducer;
