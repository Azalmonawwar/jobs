import React from 'react'
import JobsPage from './JobsList'
import { getUser } from '@/lib/action/user.action';
import { getAllJobsByCompanyId } from '@/lib/action/company.action';

const page = async () => {
    const { company } = await getUser();
    const { data } = await getAllJobsByCompanyId(company._id);
    return (
        <JobsPage jobs={data} companyId={company._id} />
    )
}

export default page