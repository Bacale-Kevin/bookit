import { combineReducers } from "redux";

import { allRoomsReducer } from "./roomsReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
});

export default reducer;
