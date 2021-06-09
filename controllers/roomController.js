import Room from '../models/room'

const getAllRooms = (req, res) => {
    res.status(200).json({
        sucess: true,
        message: 'All rooms'
    })
}

const createRoom = (req, res) => {

    
}

export {
    getAllRooms,
    createRoom,
}