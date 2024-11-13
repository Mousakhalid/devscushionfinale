'use client';
import React, { useState } from 'react';
import { contentData } from '../../../lib/devops';

const WhatYouOffer = () => {
    const initialVisibleItems = 6;
    const [visible, setVisible] = useState(initialVisibleItems); // Initial visible items set to 6

    // Function to handle loading more items
    const loadMore = () => {
        setVisible((prevVisible) => prevVisible + 6); // Increase visible items by 6
    };

    // Function to handle showing less items
    const showLess = () => {
        setVisible(initialVisibleItems); // Reset visible items to initial limit
    };

    return (
        <div>
            <div className="md:px-44 px-8 space-y-3">
                <h1 className="text-center md:text-4xl text-2xl  font-bold">DevOps Solutions & Services We Offer</h1>
                <p className="text-gray-600 text-[15px] text-center">
                    DevOps encompasses four key steps: Continuous Integration, Continuous Delivery, Infrastructure as Code, and Continuous Monitoring, enhancing efficiency and reliability.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 px-8">
                {contentData.slice(0, visible).map((item) => (
                    <div key={item.id} className="p-6 border rounded shadow">
                        <img src={item.icon} alt={item.heading} className="h-12 w-12 mb-4" />
                        <h3 className="text-xl font-semibold">{item.heading}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                {visible < contentData.length && (
                    <button onClick={loadMore} className="px-4 py-2 bg-blue-600 text-white rounded mr-2">
                        Load More Services
                    </button>
                )}
                {visible > initialVisibleItems && (
                    <button onClick={showLess} className="px-4 py-2 bg-gray-600 text-white rounded">
                        Show Less Services
                    </button>
                )}
            </div>
        </div>
    );
};

export default WhatYouOffer;
