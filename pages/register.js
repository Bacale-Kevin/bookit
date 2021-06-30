import React from 'react'
import Register from '../components/auth/Register'
import Layout from '../components/layout/Layout'

const registerPage = () => {
    return (
        <>
            <Layout title="Register">
                <Register />
            </Layout>
        </>
    )
}

export default registerPage
