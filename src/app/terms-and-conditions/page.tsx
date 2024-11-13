import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: {
    index: false,
    follow: true
  }
};



const TermsConditions: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Terms and Conditions</h1>
      <p className="mb-4 leading-relaxed">
        Welcome to DevsCushion!
      </p>
      <p className="mb-4 leading-relaxed">
        These terms and conditions outline the rules and regulations for the use of DevsCushion's website, located at{' '}
        <a href="https://devscushion.com" className="text-blue-600">https://devscushion.com</a>.
      </p>
      <p className="mb-4 leading-relaxed">
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use DevsCushion if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cookies</h2>
      <p className="mb-4 leading-relaxed">
        We employ the use of cookies. By accessing DevsCushion, you agree to use cookies in accordance with DevsCushion’s Privacy Policy.
      </p>
      <p className="mb-4 leading-relaxed">
        Most interactive websites use cookies to retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas, making it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">License</h2>
      <p className="mb-4 leading-relaxed">
        Unless otherwise stated, DevsCushion and its licensors own the intellectual property rights for all material on DevsCushion. All intellectual property rights are reserved. You may access this from DevsCushion for your personal use, subject to restrictions set in these terms and conditions.
      </p>
      <p className="mb-4 leading-relaxed">
        You must not:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Republish material from DevsCushion</li>
        <li>Sell, rent, or sub-license material from DevsCushion</li>
        <li>Reproduce, duplicate, or copy material from DevsCushion</li>
        <li>Redistribute content from DevsCushion</li>
      </ul>
      <p className="mb-4 leading-relaxed">
        This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Comments</h2>
      <p className="mb-4 leading-relaxed">
        Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. DevsCushion does not filter, edit, publish, or review Comments before their presence on the website. Comments do not reflect the views and opinions of DevsCushion, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts them. To the extent permitted by applicable laws, DevsCushion shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Hyperlinking to Our Content</h2>
      <p className="mb-4 leading-relaxed">
        The following organizations may link to our Website without prior written approval:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Government agencies</li>
        <li>Search engines</li>
        <li>News organizations</li>
        <li>Online directory distributors</li>
      </ul>
      <p className="mb-4 leading-relaxed">
        We may consider and approve other link requests from organizations such as:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Commonly-known consumer and/or business information sources</li>
        <li>Dot.com community sites</li>
        <li>Associations or other groups representing charities</li>
        <li>Online directory distributors</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">iFrames</h2>
      <p className="mb-4 leading-relaxed">
        Without prior approval and written permission, you may not create frames around our web pages that alter in any way the visual presentation or appearance of our Website.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Content Liability</h2>
      <p className="mb-4 leading-relaxed">
        We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims arising from your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, violates, or advocates the infringement or violation of third-party rights.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Reservation of Rights</h2>
      <p className="mb-4 leading-relaxed">
        We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Removal of Links</h2>
      <p className="mb-4 leading-relaxed">
        If you find any link on our Website that is offensive for any reason, feel free to contact us. We will consider requests to remove links but are not obligated to do so.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Disclaimer</h2>
      <p className="mb-4 leading-relaxed">
        To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and its use. Nothing in this disclaimer will:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Limit or exclude our or your liability for death or personal injury</li>
        <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
        <li>Limit any of our or your liabilities in a way not permitted under applicable law</li>
      </ul>
      <p className="mb-4 leading-relaxed">
        As long as the website and the information and services are provided free of charge, we will not be liable for any loss or damage of any nature.
      </p>
    </div>
  );
};

export default TermsConditions;
