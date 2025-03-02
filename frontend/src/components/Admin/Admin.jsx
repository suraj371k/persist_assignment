import React from 'react'
import AdminPanel from './AdminPanel'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className=' bg-black w-full h-auto py-7'>
        <div className='w-full flex mt-10 justify-end container mx-auto'>
            <Link to='/create' className='bg-purple-800 text-white px-8 py-3 rounded-xl'>Create challenge</Link>
        </div>
        <AdminPanel />
    </div>
  )
}

export default Admin