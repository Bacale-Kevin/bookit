import React from 'react'
import Login from '../components/auth/Login'
import Layout from '../components/layout/Layout'

const loginPage = () => {
    return (
        <div>
            <Layout title="Search Rooms">
                <Login />
            </Layout>
        </div>
    )
}

export default loginPage
