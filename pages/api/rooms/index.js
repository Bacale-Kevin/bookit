import nc from "next-connect";
import dbConnect from "../../../config/DBConnect";
import {
  createRoom,
  getAllRooms,
  getSingleRoom,
} from "../../../controllers/roomController";
import onError from "../../../middlewares/errors";

const handler = nc({ onError });
dbConnect();

handler.get(getAllRooms);
handler.get(getSingleRoom);
handler.post(createRoom);

module.exports = handler;
