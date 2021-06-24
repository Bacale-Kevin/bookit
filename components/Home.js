import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { rooms } = useSelector(state => state.allRooms);

  console.log({ rooms   })

  return (
    <section id="rooms" className="container mt-5">
      <h2 className="mb-3 ml-2 stays-heading">Stays in New York</h2>
      <a href="#" className="ml-2 back-to-search">
        <i className="fa fa-arrow-left" /> Back to Search
      </a>
      <div className="row">
        <div className="my-3 col-sm-12 col-md-6 col-lg-3">
          <div className="p-2 card">
            <img
              className="mx-auto card-img-top"
              src="https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="#">Charming Studio &lt; 10 Miles to Wells' Beaches!</a>
              </h5>
              <div className="mt-auto mb-3 ratings">
                <p className="card-text">
                  <b>$12</b> / night
                </p>
                <div className="rating-outer">
                  <div className="rating-inner" />
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 col-sm-12 col-md-6 col-lg-3">
          <div className="p-2 card">
            <img
              className="mx-auto card-img-top"
              src="https://a0.muscache.com/im/pictures/2121b1e3-1d2b-4824-9268-eba1e593bc28.jpg?im_w=720"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="#">Picturesque 2-Story Farmhouse w/Private Hot Tub</a>
              </h5>
              <div className="mt-auto mb-3 ratings">
                <p className="card-text">
                  <b>$12</b> / night
                </p>
                <div className="rating-outer">
                  <div className="rating-inner" />
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 col-sm-12 col-md-6 col-lg-3">
          <div className="p-2 card">
            <img
              className="mx-auto card-img-top"
              src="https://a0.muscache.com/im/pictures/4599de32-549f-4125-8c93-ef99ce5b4cb0.jpg?im_w=720"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="#">Downtown Portsmouth Private Getaway! Hot Tub</a>
              </h5>
              <div className="mt-auto mb-3 ratings">
                <p className="card-text">
                  <b>$12</b> / night
                </p>
                <div className="rating-outer">
                  <div className="rating-inner" />
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>
        <div className="my-3 col-sm-12 col-md-6 col-lg-3">
          <div className="p-2 card">
            <img
              className="mx-auto card-img-top"
              src="https://a0.muscache.com/im/pictures/70d71940-9610-46b8-b028-cc190bbfe6e9.jpg?im_w=960"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="#">Spacious Suite in a quiet Boston neighborhood.</a>
              </h5>
              <div className="mt-auto mb-3 ratings">
                <p className="card-text">
                  <b>$12</b> / night
                </p>
                <div className="rating-outer">
                  <div className="rating-inner" />
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <button className="btn btn-block view-btn">
                <a href="#">View Details</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
