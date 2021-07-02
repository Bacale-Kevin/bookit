import React from 'react'
import Login from '../components/auth/Login'
import Layout from '../components/layout/Layout'

import { getSession } from "next-auth/client";

const loginPage = () => {
    return (
        
            <Layout title="Search Rooms">
                <Login />
            </Layout>
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

export default loginPage
