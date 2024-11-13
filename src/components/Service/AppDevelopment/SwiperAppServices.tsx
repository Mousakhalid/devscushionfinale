"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link"; // Assuming you're using Next.js
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const ServicesCarousel = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setSlidesPerView(1);
            } else if (width < 768) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3); // Show more slides on larger screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call on initial render

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="gap-8 py-32">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={slidesPerView}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
                loop
                autoplay
            >
                <SwiperSlide>
                    <div className="bg-white border-t-4 rounded-xl h-[500px] border-[#6f2fa1] space-y-5 py-8 px-8">
                        <h2 className="font-semibold text-4xl font-mono text-gray-700">Product Design</h2>
                        <p className="text-gray-500">
                            Our Product Design service seamlessly merges beauty with usability, transforming your ideas into captivating digital experiences that deeply connect with your audience at every touchpoint.
                        </p>
                        <p className="underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]">
                            <Link href={'/pricing'}>Learn More</Link> <ArrowRight />
                        </p>
                        <hr />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white border-t-4 rounded-xl h-[500px] border-[#6f2fa1] space-y-5 py-8 px-8">
                        <h2 className="font-semibold text-4xl font-mono text-gray-700">Strategy Consulting & Auditing</h2>
                        <p className="text-gray-500">
                            Elevate your business with our Strategy Consulting & Audits, providing in-depth market analysis, strategic planning, and comprehensive assessments to help you thrive in a competitive landscape.
                        </p>
                        <p className="underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]">
                            <Link href={'/pricing'}>Learn More</Link> <ArrowRight />
                        </p>
                        <hr />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white border-t-4 rounded-xl h-[500px] border-[#6f2fa1] space-y-5 py-8 px-8">
                        <h2 className="font-semibold text-4xl font-mono text-gray-700">Software & App Development</h2>
                        <p className="text-gray-500">
                            Our Software and App Development services are customized to deliver robust, scalable, and innovative solutions, ensuring your digital product excels in the market and meets the needs of your users.
                        </p>
                        <p className="underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]">
                            <Link href={'/pricing'}>Learn More</Link> <ArrowRight />
                        </p>
                        <hr />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-white border-t-4 rounded-xl h-[500px] border-[#6f2fa1] space-y-5 py-8 px-8">
                        <h2 className="font-semibold text-4xl font-mono text-gray-700">Product Marketing</h2>
                        <p className="text-gray-500">
                            Boost engagement and drive growth with our Product Marketing strategies, crafted to enhance your product's visibility through impactful messaging, targeted campaigns, and captivating content.
                        </p>
                        <p className="underline text-xl pt-8 text-[#000002] flex items-center space-x-3 hover:text-[#6F2FA1]">
                            <Link href={'/pricing'}>Learn More</Link> <ArrowRight />
                        </p>
                        <hr />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ServicesCarousel;
