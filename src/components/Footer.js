import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 txt-neutral-400 py-2'>
      <div className='flex items-center justify-center gap-4'>
      <Link to={"https://www.linkedin.com/in/pavlo-kucheriavykh-1b8053329"}>Contact</Link>
      <Link to={"https://github.com/PashaKycher"}>Repositories</Link>
      </div>
      <p className='test-sm'>Created by Kucheriavych Pavlo</p>
    </footer>
  )
}

export default Footer