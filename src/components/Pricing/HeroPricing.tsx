import React from 'react';

const HeroPricing = () => {
  return (
    <div className="bg-[#F5F5F5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
          <div className="flex justify-center md:flex-1">
            <video
              src="/vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-md border-none bg-transparent"
            />
          </div>
          <div className="md:flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold font-mono mb-4">
              Custom built products to help you plan, build, and scale your venture
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our team works closely with you to understand your project requirements, scope, and expected outcomes,
              crafting a personalized quote that reflects the true value of your project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPricing;
