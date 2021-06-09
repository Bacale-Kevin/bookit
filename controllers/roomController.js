import Room from "../models/room";

//* Get all rooms => /api/rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({ success: true, count: rooms.length, rooms });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

//* Create new room => /api/rooms
const createRoom = async (req, res) => {
  try {
    const createdRoom = await Room.create(req.body); //this is possible beacuse all the fields in the model are required or have a default value
    res.status(201).json({ success: true, createdRoom });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

//* Get sindle room => /api/rooms/:id
const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);

    if (!room) {
      return res
        .status(404)
        .json({ success: false, error: "Room with this ID not found" });
    }
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

//* Update a room => /api/rooms/:id
const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);

    if (!room) {
      return res
        .status(404)
        .json({ success: false, error: "Room with this ID not found" });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({ success: true, room });
    //
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



//* Get sindle room => /api/rooms/:id
const deleteRoom = async (req, res) => {
    try {
      const room = await Room.findById(req.query.id);
  
      if (!room) {
        return res
          .status(404)
          .json({ success: false, error: "Room with this ID not found" });
      }
      await room.remove()
      res.status(200).json({ success: true, message: "Room deleted" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  };



export { getAllRooms, createRoom, getSingleRoom, updateRoom, deleteRoom };
