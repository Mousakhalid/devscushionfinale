'use client'
import React, { Suspense, useState } from 'react';

const FAQs = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (value: any) => {
    setOpenItem(openItem === value ? null : value); // Toggle the open state
  };

  const renderAccordionContent = (item: any, content: any) => {
    return openItem === item ? (
      <div
        className="transition-all duration-300 ease-in-out max-h-96 overflow-hidden"
        style={{ maxHeight: openItem === item ? "500px" : "0px" }}
      >
        <p className="text-base text-gray-600 sm:text-lg md:text-xl">{content}</p>
      </div>
    ) : null;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mb-8 py-12 bg-gray-100">
        <div className="flex flex-col items-center justify-center text-center mb-6 px-4">
          <p className="text-[10px] text-gray-500 leading-relaxed tracking-wider sm:text-xs">
            FAQs
          </p>
          <h1 className="font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl">
            FAQs About DevsCushion - Full-Stack Development Company
          </h1>
        </div>

        <div className="px-8 py-16">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 w-full">

            {/* FAQ Item 1 */}
            <div className="space-y-6">
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-1")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  What services does DevsCushion offer?
                </div>
                {renderAccordionContent("item-1", "DevsCushion specializes in SaaS development, digital marketing, custom development, UI/UX design, web development, and app development.")}
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-2")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  What is SaaS development?
                </div>
                {renderAccordionContent("item-2", "SaaS (Software as a Service) development involves creating applications that are hosted in the cloud and accessible via the internet, allowing users to access software without needing to install it on their devices.")}
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-3")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  How can digital marketing benefit my business?
                </div>
                {renderAccordionContent("item-3", "Digital marketing can increase your online visibility, attract potential customers, and enhance brand awareness through strategies like SEO, social media marketing, and content marketing.")}
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-4")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  Do you offer custom software development?
                </div>
                {renderAccordionContent("item-4", "Yes, we provide custom software development tailored to meet the specific needs and requirements of our clients.")}
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-5")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  What is the importance of UI/UX design?
                </div>
                {renderAccordionContent("item-5", "UI/UX design is crucial as it enhances user satisfaction by improving usability, accessibility, and the overall experience of using a product or service.")}
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-6")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  Can you help with both web and mobile app development?
                </div>
                {renderAccordionContent("item-6", "Yes, we have expertise in developing both web applications and mobile applications for various platforms.")}
              </div>
            </div>

            {/* FAQ Item 7 */}
            <div className="space-y-6">
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-7")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  How long does it take to develop a software solution?
                </div>
                {renderAccordionContent("item-7", "The timeline for development varies based on the complexity of the project. We provide estimated timelines during the initial consultation.")}
              </div>

              {/* FAQ Item 8 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-8")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  What technologies do you use for development?
                </div>
                {renderAccordionContent("item-8", "We utilize a range of technologies, including but not limited to JavaScript, Python, PHP, React, Next, and various cloud services depending on project requirements.")}
              </div>

              {/* FAQ Item 9 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-9")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  Do you provide ongoing support and maintenance?
                </div>
                {renderAccordionContent("item-9", "Yes, we offer ongoing support and maintenance services to ensure your software remains up-to-date and functions smoothly.")}
              </div>

              {/* FAQ Item 10 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-10")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  Can you integrate third-party services and APIs?
                </div>
                {renderAccordionContent("item-10", "Yes, our development company has extensive experience in integrating third-party services and APIs into your applications.")}
              </div>

              {/* FAQ Item 11 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-11")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  How do you ensure the quality of your software?
                </div>
                {renderAccordionContent("item-11", "We follow best practices in software development, including rigorous testing, code reviews, and adherence to industry standards to ensure high-quality outcomes.")}
              </div>

              {/* FAQ Item 12 */}
              <div className="bg-white px-6 py-4 rounded-md shadow-md w-full">
                <div
                  onClick={() => handleToggle("item-12")}
                  className="cursor-pointer font-bold text-gray-800 text-[13px] sm:text-lg hover:text-blue-600">
                  What are your pricing models?
                </div>
                {renderAccordionContent("item-12", "Our pricing models vary based on the scope of the project, the timeline, and the technologies used.")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default FAQs;
