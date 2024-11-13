import HomeContact from '@/components/Contact/HomeContact'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {

  title: "Contact | Let us call you",
};



const ContactPage = () => {
  return (
    <div>
      <HomeContact />
    </div>
  )
}

export default ContactPage