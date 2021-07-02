import { combineReducers } from "redux";

import { allRoomsReducer, roomDetailsReducer } from "./roomsReducers";
import { authReducer, userReducer } from './usersReducers';

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  user: userReducer,
});

export default reducer;
