import React from "react";
import Layout from "../../components/layout/Layout";
import Profile from "../../components/user/Profile";

import { getSession } from "next-auth/client";

const updateProfilePage = () => {
  return (
    <Layout title="Update Profile">
      <Profile />
    </Layout>
  );
};

//* making sure that protected routes can accessed only by login users
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false, //push the user only once to the /login
      },
    };
  }

  return {
    props: { session },
  };
}

export default updateProfilePage;
