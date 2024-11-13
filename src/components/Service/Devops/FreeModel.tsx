import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FreeModel = () => {
    return (
        <div className="md:px-44 px-8 relative">
            {/* Background section */}
            <div className="bg-[#6F2FA0] rounded-xl py-20 relative overflow-hidden max-sm:h-[900px] z-0"> {/* Use your custom background color */}

                {/* Background Image Overlay */}
                <div className="absolute inset-0 bg-opacity-30 z-0">
                    <Image
                        src="/white.png"
                        alt="Background Pattern"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-30"  // Adjust opacity to be visible behind text 
                    />
                </div>

                {/* Text Content */}
                <div className="relative text-center z-10 px-3 space-y-3 py-12">
                    <h1 className="font-bold text-3xl text-white">Our Dynamic Engagement Models</h1>
                    <p className="text-white text-sm">
                        Our flexible engagement models are guaranteed to fulfill your <br className="hidden md:block" />
                        project needs within your budget.
                    </p>
                </div>

                {/* Cards */}
                <div className="absolute md:-bottom-12 left-1/2 transform -translate-x-1/2 flex max-sm:flex-col items-center justify-center gap-8 max-sm:py-8 z-20">
                    {/* Card 1 */}
                    <div className="w-64 p-6 bg-white rounded-2xl text-lg shadow-lg flex flex-col items-center z-20">
                        <Image src="/staff-augmentation.png" alt="Staff Augmentation" width={60} height={60} />
                        <h2 className="font-semibold text-center text-black mt-4">Staff Augmentation</h2>
                    </div>
                    {/* Card 2 */}
                    <div className="w-64 p-6 bg-white rounded-2xl text-lg shadow-lg flex flex-col items-center z-20">
                        <Image src="/dedicated-teams.png" alt="Dedicated Teams" width={60} height={60} />
                        <h2 className="font-semibold text-center text-black mt-4">Dedicated Teams</h2>
                    </div>
                    {/* Card 3 */}
                    <div className="w-64 p-6 bg-white rounded-2xl text-lg shadow-lg flex flex-col items-center z-20">
                        <Image src="/product-development.png" alt="Product Development" width={60} height={60} />
                        <h2 className="font-semibold text-center text-black mt-4">Product Development</h2>
                    </div>
                </div>
            </div>
            <div className='py-16 flex items-center justify-center'>
                <div>
                    <Link href={'/get-a-quote'}>
                        <Button className='px-12 py-5 bg-[#6F2FA0]'>Get Free Quote</Button>
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default FreeModel;
