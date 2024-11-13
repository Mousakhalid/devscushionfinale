import React from 'react';
import { FaTimes } from 'react-icons/fa';

const IssuesListSaas = () => {
    const issues = [
        "Inconsistent teams and communication lead to delays and issues",
        "Unfocused development lacks clear objectives",
        "A lack of commitment to long-term product success undermines growth",
        "Inefficient resource utilization wastes time and budget",
        "Low development standards compromise software quality"
    ];

    return (
        <div style={{ fontFamily: 'sans-serif', color: '#333', fontSize: '1rem', lineHeight: '1.6' }}>
            {issues.map((issue, index) => (
                <div key={index} className="flex items-start space-x-4 mb-2">
                    <div className="flex items-center justify-center w-6 h-6 bg-white border-2 border-pink-500 rounded-full">
                        <FaTimes className="text-pink-500 text-xs" />
                    </div>
                    <p >
                        {issue}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default IssuesListSaas;
