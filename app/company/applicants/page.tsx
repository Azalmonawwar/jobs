import React from 'react'
import ApplicantsPage from './ApplicantsList'
import { getAllJobsByCompanyId } from '@/lib/action/company.action'
import { getUser } from '@/lib/action/user.action'

const page = async () => {
    const { company } = await getUser()
    const { data } = await getAllJobsByCompanyId(company._id)
    return (
        <ApplicantsPage data={data} />
    )
}

export default page