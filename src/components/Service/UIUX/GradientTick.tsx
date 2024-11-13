import React from 'react';
import { FaCheck } from 'react-icons/fa';

const GradientCheckIcon = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-full p-2 flex items-center justify-center" style={{
                backgroundImage: 'linear-gradient(45deg, #a78bfa, #60a5fa)',
                width: '50px',
                height: '50px'
            }}>
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                    <FaCheck className="text-purple-500 text-xl" />
                </div>
            </div>
        </div>
    );
};

export default GradientCheckIcon;
