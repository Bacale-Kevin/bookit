import { combineReducers } from "redux";

import { allRoomReducer } from "./roomsReducers";

const reducer = combineReducers({
  allRooms: allRoomReducer,
});

export default reducer;
