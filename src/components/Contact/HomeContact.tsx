import React from 'react'
import HeroContact from './HeroContact'
import ContactCards from './ContactCards'
import ContactForm from './ContactForm'

const HomeContact = () => {
    return (
        <div>
            <div className='bg-gray-100'>
                <HeroContact />
                <ContactCards />
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    )
}

export default HomeContact