import nc from "next-connect";
import dbConnect from "../../../config/DBConnect";
import {
  createRoom,
  getAllRooms,
  getSingleRoom,
} from "../../../controllers/roomController";

const handler = nc();
dbConnect();


handler.get(getAllRooms);
handler.get(getSingleRoom);
handler.post(createRoom);

module.exports = handler;
