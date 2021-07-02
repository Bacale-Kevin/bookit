import React from 'react'
import Register from '../components/auth/Register'
import Layout from '../components/layout/Layout'

import { getSession } from "next-auth/client";

const registerPage = () => {
    return (
        <>
            <Layout title="Register">
                <Register />
            </Layout>
        </>
    )
}


export async function getServerSideProps({ req }) {
    const session = await getSession({ req });
  
    if (session) {
      return {
        redirect: {
          destination: "/",
          permanent: false, //push the user only once to the /login
        },
      };
    }
  
    return {
      props: {},
    };
  }

export default registerPage
