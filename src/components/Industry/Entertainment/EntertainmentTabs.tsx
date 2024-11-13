import Link from 'next/link';
import React from 'react';

const EntertainmentTabs = () => {
    return (
        <div className='max-sm:hidden block -mt-6'>
            <div>
                <div className='mb-3 flex items-center space-x-7 justify-center mx-auto'>
                    <div className='group'>
                        <Link href='#overview-entertainment'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Overview
                            </p>
                        </Link> 
                    </div> 
                    <div className='group'>
                        <Link href='#services-entertainment'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Services
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#process-entertainment'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Process
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#core-values-entertainment'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Core Values
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#expertise-entertainment'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Expertise
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#reviews-entertainment'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Reviews
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#contact-us-entertainment'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Contact Us
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='border-b-2' />
        </div>
    );
};

export default EntertainmentTabs;
