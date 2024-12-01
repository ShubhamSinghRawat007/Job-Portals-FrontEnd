import React from 'react'
import RemoteJobs from '../components/JobDiv/RemoteJobs'
import { RecentJobs } from '../components/JobDiv/RecentJobs'
import JobHashtags from '../components/JobHashtag/JobHashtags'
import { FeaturedJobs } from '../components/JobDiv/FeaturedJobs'
const Home = () => {
    return (
        <div>
            <FeaturedJobs />
            <RemoteJobs />
            <RecentJobs />
            <JobHashtags />
        </div>
    )
}

export default Home