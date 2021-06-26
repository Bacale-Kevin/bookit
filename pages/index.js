import Home from "../components/Home";
import Layout from "../components/layout/Layout";

import { getRooms } from "../redux/actions/roomActions";

import { wrapper } from "../redux/store";
// import { getServerSideProps } from './../.next/static/webpack/pages/index.40ee0db5ea6396513a37.hot-update';

export default function Index() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

//next redux wrapper version 7.0.0 takes in the store before returning the state
export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
  try {
    await store.dispatch(getRooms(req, query.page, query.location, query.guests, query.category));

    console.log(query);

    console.log(query.guests);
    console.log(query.category);

  } catch (error) {
    console.log({ ERROR_: error.message });
  }
})


