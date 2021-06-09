import nc from "next-connect";
import dbConnect from "../../../config/DBConnect";
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controllers/roomController";

const handler = nc();
dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

module.exports = handler;
