import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Carousel } from "react-bootstrap";

import { clearErrors } from "../../redux/actions/roomActions";
import RoomFeatures from './RoomFeatures';

const RoomDetails = () => {
  const { room, error } = useSelector((state) => state.roomDetails);
  useEffect(() => {
    if (error) {
      toast.error(error);
      useDispatch(clearErrors());
    }
  }, []);
  return (
    <>
      <Head>
        <title>{room.name} - BookIT </title>
      </Head>
      <div className="container container-fluid">
        <h2 className="mt-5">{room.name})</h2>
        <p>{room.address}</p>

        <div className="mt-auto mb-3 ratings">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(room.ratings / 5) * 100}% ` }}
            ></div>
          </div>
          <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
        </div>

        <Carousel hover="pause">
          {room.images &&
            room.images.map((image) => (
              <Carousel.Item key={image.public_id}>
                <div style={{ width: "100%", height: "440px" }}>
                  <Image
                    layout="fill"
                    placeholder="blur"
                    className="m-auto d-block"
                    src={image.url}
                    alt={room.name}
                  />
                </div>
              </Carousel.Item>
            ))}
        </Carousel>

        <div className="my-5 row">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>
              {room.description}
            </p>

            <RoomFeatures  room={room}/>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="p-4 shadow-lg booking-card">
              <p className="price-per-night">
                <b>${room.pricePerNight}</b> / night
              </p>

              <button className="py-3 btn btn-block booking-btn">Pay</button>
            </div>
          </div>
        </div>

        <div className="reviews w-75">
          <h3>Reviews:</h3>
          <hr />
          <div className="my-3 review-card">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>

          <div className="my-3 review-card">
            <div className="rating-outer">
              <div className="rating-inner"></div>
            </div>
            <p className="review_user">by John</p>
            <p className="review_comment">Good Quality</p>

            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
