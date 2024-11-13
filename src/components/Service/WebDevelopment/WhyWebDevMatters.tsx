// components/WhyWebAppMatters.tsx

import React from 'react';

const WhyWebAppMatters = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-16"> 
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-4xl text-2xl max-sm:text-start font-semibold text-center text-gray-800 mb-12">
          Why Web App Development Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              User Satisfaction
            </h3>
            <p className="text-gray-600">
              A seamless and responsive web application enhances user experience,
              encouraging return visits and fostering customer loyalty.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Competitive Advantage
            </h3>
            <p className="text-gray-600">
              In today’s digital landscape, a well-developed web app with optimized 
              performance and usability helps your business stand out from competitors.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Increased Engagement
            </h3>
            <p className="text-gray-600">
              Fast load times, smooth functionality, and intuitive navigation encourage 
              users to explore your app, improving interaction and retention rates.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Conversion Optimization
            </h3>
            <p className="text-gray-600">
              Strategic development ensures an optimized user journey, leading to higher 
              conversions—whether generating leads, purchases, or completing desired actions.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Accessibility and Inclusivity
            </h3>
            <p className="text-gray-600">
              Proper web development ensures the application is accessible to all users, 
              promoting inclusivity through compliance with accessibility standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebAppMatters;
