import React from 'react'
import StudentDashboard from './StudentDashboard'
import { getUser } from '@/lib/action/user.action';

const page = async () => {
    const user = await getUser();
    console.log(user?.student);
    return (
        <StudentDashboard user={user} />
    )
}

export default page