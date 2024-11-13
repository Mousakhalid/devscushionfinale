'use client'
import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';

const Form = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault(); // Prevent default form submission behavior
        const form = e.target;

        // Collect form data
        const formData = new FormData(form);

        // Submit form data using fetch
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setMessage('Form successfully submitted! Our team will contact you shortly.');
                form.reset(); // Clear the form fields
            } else {
                setMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please check your connection and try again.');
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input type="hidden" name="access_key" value="d00bb588-3836-48a8-b421-7891e9b62c0d" />
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                        <div className="flex flex-col">
                            <label htmlFor="name">Full Name*</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="py-4 pl-3 pr-12 border border-gray-200"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="py-4 pl-3 pr-12 border border-gray-200"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone">Phone*</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            required
                            className="py-4 pl-3 pr-12 border border-gray-200"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="msg">How we can help you? *</label>
                        <textarea
                            cols={3}
                            rows={5}
                            id="msg"
                            name="msg"
                            required
                            className="py-4 pl-3 pr-12 border border-gray-200"
                        />
                    </div>
                    <div className="items-top flex space-x-2 py-3">
                        <Checkbox id="terms1" name="check_terms_conditions" />
                        <div className="grid gap-1.5 leading-none">
                            <label
                                htmlFor="terms1"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                            <p className="text-sm text-muted-foreground">
                                You agree to our <Link className='text-[#6f2fa0]' href={'/terms-and-conditions'}>Terms of Service</Link>  and <Link className='text-[#6f2fa0]' href={'/privacy-policy'}>Privacy Policy</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="py-4 px-9 max-sm:w-full bg-gray-700 text-gray-50 hover:bg-gray-500">
                            Submit Now
                        </button>
                    </div>
                    {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Form;
