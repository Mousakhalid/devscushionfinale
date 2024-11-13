import React from 'react'
import QuoteForm from './QuoteForm'

const HomeQuote = () => {
    return (
        <div className='md:px-44 px-8'>
            <div className='space-y-3 py-16'>
                <h1 className='md:text-4xl text-3xl font-semibold text-center tracking-wide'>Let’s get started!</h1>
                <p className='text-center md:text-2xl text-xl font-semibold'>Book your first product session with us.
                    <br />
                    We look forward to meeting you!</p>
            </div>
            <div>
                <QuoteForm />
            </div>
        </div>
    )
}

export default HomeQuote