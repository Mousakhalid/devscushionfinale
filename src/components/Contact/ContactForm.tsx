import React from 'react'
import Form from './Form'

const ContactForm = () => {
    return (
        <div className='md:px-64 px-8 mt-8'>
            <div className='border-4 bg-white border-gray-100 md:px-12 px-7 py-16 space-y-6'>
                <div>
                    <p className='md:text-3xl text-2xl font-bold text-gray-800'>Tell us about your project</p>
                </div>
                <div>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default ContactForm