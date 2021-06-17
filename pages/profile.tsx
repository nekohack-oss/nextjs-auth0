import React from 'react'

import { useFetchUser } from '../lib/user'

import Layout from '../components/layout'

export default function Profile(): React.ReactElement {
    const { user, loading } = useFetchUser()

    return (
        <Layout user={user} loading={loading}>
            <h1>Profile</h1>

            {loading && <p>Loading profile...</p>}

            {!loading && user && (
                <>
                    <p>Profile:</p>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </>
            )}
        </Layout>
    )
}
