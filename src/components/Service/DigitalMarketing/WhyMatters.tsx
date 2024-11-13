// components/WhyDigitalMarketingMatters.tsx

import React from 'react';

const WhyDigitalMarketingMatters = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="md:text-4xl text-2xl max-sm:text-start font-semibold text-center text-gray-800 mb-12">
          Why Digital Marketing Matters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Brand Awareness
            </h3>
            <p className="text-gray-600">
              Effective digital marketing strategies enhance your brand's visibility 
              online, helping to reach a broader audience and establish a strong brand presence.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Targeted Marketing
            </h3>
            <p className="text-gray-600">
              Digital marketing allows for precise targeting of audiences based on demographics, 
              interests, and behaviors, ensuring your message reaches the right people at the right time.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Enhanced Engagement
            </h3>
            <p className="text-gray-600">
              Interactive digital marketing campaigns foster user engagement through social media, 
              emails, and personalized content, leading to meaningful interactions with your audience.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Measurable Results
            </h3>
            <p className="text-gray-600">
              Digital marketing provides analytics and insights that allow you to measure campaign effectiveness, 
              enabling data-driven decisions and continuous improvement.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-700">
              Cost-Effectiveness
            </h3>
            <p className="text-gray-600">
              Compared to traditional marketing methods, digital marketing often provides a more cost-effective solution 
              to reach and convert customers, maximizing your marketing budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDigitalMarketingMatters;
