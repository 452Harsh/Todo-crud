import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='flex justify-center items-center gap-3 py-3 duration-200 hover:opacity-30 cursor-pointer'>
      <InstagramIcon/>
      <LinkedInIcon/>
    </div>
  )
}

export default Footer;