'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';

const FormPRD = () => {
    const [result, setResult] = React.useState("");

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
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="px-8 md:px-16 lg:px-32 py-8">
                <h1 className="text-2xl md:text-4xl text-center font-semibold font-mono mb-8">Complete this form to get your copy of the PRD directly to your inbox!</h1>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col space-y-6 max-w-lg w-full px-4">
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="border rounded py-3 px-4 w-full text-sm sm:text-base"
                />
                <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Working E-mail"
                    className="border rounded py-3 px-4 w-full text-sm sm:text-base"
                />
                <Button className="py-3 rounded bg-[#6F2FA0] text-white duration-300 hover:bg-[#2b1141]">
                    Get My Template
                </Button>
            </form>

            <span className="mt-4 text-center text-sm">{result}</span>

            <p className="text-center text-[12px] mt-4">
                By clicking submit, you agree to our{" "}
                <Link className="text-[#6F2FA0]" href="/privacy-policy">
                    Privacy and Terms
                </Link>
            </p>
        </div>
    );
};

export default FormPRD;
