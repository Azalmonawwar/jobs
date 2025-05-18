import React from 'react'
import CompaniesPage from './Company'
import { getAllCompanies } from '@/lib/action/user.action'

const page = async () => {
  const { companies } = await getAllCompanies();
  console.log(companies)
  return (
    <CompaniesPage companies={companies} />
  )
}

export default page