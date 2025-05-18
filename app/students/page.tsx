import { getAllStudents } from '@/lib/action/user.action'
import React from 'react'
import StudentsPage from './Students';

const page = async () => {
  const { students } = await getAllStudents();
  console.log(students);
  return (
    <StudentsPage students={students} />
  )
}

export default page