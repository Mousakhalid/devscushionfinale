import { div } from "framer-motion/client"
import Link from "next/link"

const CardsHover = () => {
    return (
        // <div className='px-8 '>
        //     <div className='flex justify-between gap-8 items-center md:flex-row flex-col -mt-40'>
        //         <div>
        //             <div className='background py-28 px-44'>
        //                 { }
        //             </div>
        //             <div className='bg-white text-center py-12 px-20 -mt-16'>
        //                 <p className='text-[14px] font-bold text-gray-800'>Our Services</p>
        //                 <p className='text-xl font-bold'>How we can help?</p>
        //             </div>
        //         </div>
        //         <div>
        //             <div className='background1 py-28 px-44'>
        //                 { }
        //             </div>
        //             <div className='bg-white text-center py-12 px-20 -mt-16'>
        //                 <p className='text-[14px] font-bold text-gray-800'>Our Expertise</p>
        //                 <p className='text-xl font-bold'>Why partner with us?</p>
        //             </div>
        //         </div>
        //         <div>
        //             <div className='background2 py-28 px-44'>
        //                 { }
        //             </div>
        //             <div className="bg-white text-center py-12 px-20 -mt-16">
        //                 <p className='text-[14px] font-bold text-gray-800'>Our Customers</p>
        //                 <p className='text-xl font-bold'>Client success stories</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16 md:-mt-40 -mt-10 ">
                <div className="relative group">
                    <Link href={'/services'}>
                        <img
                            src="discover.jpg"
                            alt="Our services"
                            className=" w-full h-[230px] object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 p-6 bg-white text-center shadow-lg group-hover:shadow-xl">
                            <h4 className="text-[#6F2FA0] uppercase mb-2">Our services</h4>
                            <h2 className="text-xl font-semibold">How we can help</h2>
                        </div>
                    </Link>
                </div>

                <div className="relative group">
                    <Link href={'/why-choose-us'}>
                        <img
                            src="expertise.jpg"
                            alt="Our expertise"
                            className="w-full h-[230px] object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 p-6 bg-white text-center  shadow-lg group-hover:shadow-xl">
                            <h4 className="text-[#6F2FA0] uppercase mb-2">Our expertise</h4>
                            <h2 className="text-xl font-semibold">Why partner with us</h2>
                        </div>
                    </Link>
                </div>

                <div className="relative group">
                    <Link href={'/work'}>
                        <img
                            src="success.jpg"
                            alt="Our customers"
                            className="w-full h-[230px] object-cover"
                        />
                        <div className="absolute bottom-4 left-4 right-4 p-6 bg-white text-center shadow-lg group-hover:shadow-xl">
                            <h4 className="text-[#6F2FA0] uppercase mb-2">Our customers</h4>
                            <h2 className="text-xl font-semibold">Client success stories</h2>
                        </div>
                    </Link>
                </div>

            </div>
            <div className="text-center md:pt-44 pt-[800px] md:-mt-36 -mt-[800px] pb-8 bg-gray-100">
                <h2>Get Your App and Website Development Services from Industry Experts. <Link className="underline md:underline-offset-4" href={'/contact'}>Hire Us</Link> </h2>
            </div>
        </div>
    )
}

export default CardsHover