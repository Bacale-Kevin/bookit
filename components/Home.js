import React, { useEffect } from "react";
import Link from "next/link"
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import Pagination from "react-js-pagination"
import { useRouter } from 'next/router'

import RoomItem from "./room/RoomItem"

import { clearErrors } from '../redux/actions/roomActions'

const Home = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } = useSelector(state => state.allRooms);

  useEffect(() => {

    if (error) {
      toast.error(error)
      dispatch(clearErrors())
    }
  })

  let { location, page = 1 } = router.query //getting the current page number from the query

  page = Number(page) //converting the query string into a number

  const handlePagination = (pageNumber) => {
    window.location.href = `/?page=${pageNumber}`
  }
// removing the pagination when there is filtered rooms
  let count = roomsCount;
  if(location){
    count = filteredRoomsCount
  }


  return (
    <>
      <section id="rooms" className="container mt-5">
        <h2 className="mb-3 ml-2 stays-heading">{location ? `Rooms in ${location}` : 'All Rooms'}</h2>
        <Link href="/search">
          <a className="ml-2 back-to-search">
            <i className="fa fa-arrow-left" /> Back to Search
          </a>
        </Link>
        <div className="row">
          {
            rooms && rooms.length === 0 ? (
              <div className="mt-5 alert alert-danger w-100">
                <b>No Rooms Found.</b>
              </div>
            ) : (
              rooms.map(room => (
                <RoomItem key={room.id} room={room} />
              ))
            )
          }



        </div>
      </section>
      {
        resPerPage < count &&
        <div className="mt-5 d-flex justify-content-center">
          <Pagination
            activePage={page}
            itemsCountPerPage={resPerPage}
            totalItemsCount={roomsCount}
            onChange={handlePagination}
            nextPageText={'Next'}
            prevPageText={'Prev'}
            firstPageText={"First"}
            lastPageText={"Last"}
            itemClass="page-item" //overriding classes found in the css files
            linkClass="page-link" //overriding classes found in the css files
          />
        </div>
      }
    </>
  );
};

export default Home;
