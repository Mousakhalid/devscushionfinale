import Link from 'next/link';
import React from 'react';

const HealthCareTabs = () => {
    return (
        <div className='max-sm:hidden block -mt-6'>
            <div>
                <div className='mb-3 flex items-center space-x-7 justify-center mx-auto'>
                    <div className='group'>
                        <Link href='#healthcare-overview'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Overview
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#healthcare-services'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Services
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#healthcare-process'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Process
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#healthcare-core-values'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Core Values
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#healthcare-expertise'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Expertise
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#healthcare-reviews'>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Reviews
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href='#healthcare-contact'>
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

export default HealthCareTabs;
