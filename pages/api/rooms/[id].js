import nc from "next-connect";
import dbConnect from "../../../config/DBConnect";
import {
  deleteRoom,
  getSingleRoom,
  updateRoom,
} from "../../../controllers/roomController";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

module.exports = handler;
