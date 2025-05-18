import React from 'react'
import CompanyDashboard from './CompanyDashboard'
import { getUser } from '@/lib/action/user.action'
import { getAllJobsByCompanyId } from '@/lib/action/company.action';

const page = async () => {
  const { company } = await getUser();

  const { data } = await getAllJobsByCompanyId(company._id);
  console.log(data);
  return (
    <CompanyDashboard company={company} jobs={data} />
  )
}

export default page