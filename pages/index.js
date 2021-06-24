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


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  try {

    await store.dispatch(getRooms(req));
  } catch (error) {
    console.log({ ERROR_: error.message });
  }
})


