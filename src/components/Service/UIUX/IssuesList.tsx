import React from 'react';
import { FaTimes } from 'react-icons/fa';

const IssuesList = () => {
    const issues = [
        "Skipping strategy and user research -> user misalignment",
        "Untested assumption-based design",
        "Inconsistent UX that confuses users and degrades experiences",
        "Resource waste due to lack of strategy and testing",
        "Poor stakeholder alignment"
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

export default IssuesList;
