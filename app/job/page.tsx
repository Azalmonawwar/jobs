import React from 'react'
import JobsPage from './Jobss'
import { getAllJobs } from '@/lib/action/company.action';
import { getUser } from '@/lib/action/user.action';

const page = async () => {
    const { student } = await getUser();

    const jobs = await getAllJobs();
    return (
        <JobsPage jobs={jobs?.data} student={student} />
    )
}

export default page