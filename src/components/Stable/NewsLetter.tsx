'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'


const Newsletter = () => {

    type NewsData = {
        email: string;
    }
    const [result, setResult] = React.useState("");
    const [loading, setLoading] = useState(false)

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "d00bb588-3836-48a8-b421-7891e9b62c0d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("You will get latest updates about tech and news");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <form onSubmit={onSubmit} method='POST' className='w-full  rounded-lg py-16 text-white bg-[#7030A1] px-4' id='subs'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips & tricks to grow your business
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            required
                            name='newsletter'
                            className='p-3 flex w-full rounded-md text-black'
                            type="email"
                            placeholder='Enter Email'
                            autoCapitalize="off"
                            autoCorrect="off"
                            id="email-input"
                        />

                        {loading ? (
                            <div className='flex items-center justify-center rounded-md text-white md:w-[567px] py-2 w-full bg-fuchsia-700 hover:bg-gray-800 duration-300 text-xl'>
                                <FaSpinner className='animate-spin mr-2' />{" "}
                                Submitting...
                            </div>
                        ) : (
                            <>
                                <button className='bg-[#00df9a] text-black rounded-md font-medium  max-sm:mr-4 md:w-[200px] ml-4 my-6 px-6 py-3 w-full' type='submit' name='subscribe' disabled={loading}>Notify Me</button>
                            </>
                        )}
                    </div>
                    <div>
                        {result}
                    </div>
                    <p>
                        We care bout the protection of your data. <br />Read our{' '}
                        <span className='text-[#00df9a]'>
                            <Link href="/privacy-policy">Privacy Policy.</Link>
                        </span>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Newsletter;