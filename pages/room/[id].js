import Layout from "../../components/layout/Layout";
import RoomDetails from './../../components/room/RoomDetails';


import { getRoomDetails } from "../../redux/actions/roomActions";

import { wrapper } from "../../redux/store";

export default function RoomDetailsPage() {
  return (
    <>
      <Layout>
        <RoomDetails title="Room Details"/>
      </Layout>
    </>
  );
}

//next redux wrapper version 7.0.0 takes in the store before returning the state
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
  try {
    await store.dispatch(getRoomDetails(req, params.id));
  } catch (error) {
    console.log({ ERROR_: error.message });
  }
})


