import Link from 'next/link';
import React from 'react';

const TabsWhy = () => {
    return (
        <div className='max-sm:hidden block -mt-6'>
            <div>
                <div className='mb-3 flex items-center space-x-7 justify-center mx-auto'>
                    <div>
                        <h1 className='font-bold'>Company</h1>
                    </div>
                    <div className='group'>
                        <Link href={'/company'}>
                        <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>About</p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href={'/mission-vision-values'}>
                            <p className='cursor-pointer group-hover:border-b-2 group-hover:border-[#7030A0] transition duration-300'>
                                Mission
                            </p>
                        </Link>
                    </div>
                    <div className='group'>
                        <Link href={'/why-choose-us'}>
                            <p className='cursor-pointer'>
                                Why choose us
                            </p>
                            <hr className='border-b-2 border-[#7030A0]' />
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='border-b-2' />
        </div>
    );
};

export default TabsWhy;
