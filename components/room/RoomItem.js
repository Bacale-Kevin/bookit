import React from 'react'
import Image from "next/image"
import Link from "next/link"

const RoomItem = ({ room }) => {
    return (
        <div className="my-3 col-sm-12 col-md-6 col-lg-3">
            <div className="p-2 card">
                <Image
                    className="mx-auto card-img-top"
                    src={room.images[0].url} //accessing the first index of the image because image is an array the room will have multiple images
                    height={170}
                    width=""
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link href={`/room/${room._id}`}>
                            <a>{room.name}</a>
                        </Link>
                    </h5>
                    <div className="mt-auto mb-3 ratings">
                        <p className="card-text">
                            <b>${room.pricePerNight}</b> / night
                        </p>
                        <div className="rating-outer">
                            <div className="rating-inner"
                                style={{ width: `${(room.ratings / 5) * 100}% ` }}
                            />
                        </div>
                        <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
                    </div>
                    <button className="btn btn-block view-btn">
                        <Link href={`/room/${room._id}`}>
                            <a>View Details</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoomItem
