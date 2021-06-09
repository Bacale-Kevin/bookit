const nc = require("next-connect");

import dbConnect from "../../../config/DBConnect";
import { getAllRooms } from "../../../controllers/roomController";

const handler = nc();
dbConnect()

console.log(process.env.DB_LOCAL_URI)

handler.get(getAllRooms);

module.exports =  handler;
