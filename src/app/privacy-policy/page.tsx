import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: {
    index: false,
    follow: true
  }
};



const PrivacyHome: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">Privacy Policy</h1>
      <p className="mb-4 leading-relaxed">
        This acceptable use policy (“Policy”) sets forth the general guidelines and acceptable and prohibited uses of the
        devscushion.com website (“Website” or “Service”) and any of its related products and services (collectively, “Services”).
        This Policy is a legally binding agreement between you (“User”, “you” or “you’re”) and DevsCushion (“DevsCushion”, “we”,
        “us” or “our”). If you are entering into this Policy on behalf of a business or other legal entity, you represent that you
        have the authority to bind such entity to this Policy, in which case the terms “User”, “you,” or “you’re” shall refer to
        such entity. If you do not have such authority, or if you do not agree with the terms of this Policy, you must not accept
        this Policy and may not access and use the Website and Services. By accessing and using the Website and Services, you
        acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. You acknowledge that this
        Policy is a contract between you and DevsCushion, even though it is electronic and is not physically signed by you, and it
        governs your use of the Website and Services.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Prohibited Activities and Uses</h2>
      <p className="mb-4 leading-relaxed">
        You may not use the Website and Services to publish content or engage in activity that is illegal under applicable law
        that is harmful to others, or that would subject us to liability, including, without limitation, in connection with any
        of the following, each of which is prohibited under this Policy:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Distributing malware or other malicious code.</li>
        <li>Disclosing sensitive personal information about others.</li>
        <li>Collecting, or attempting to collect, personal information about third parties without their knowledge or consent.</li>
        <li>Distributing pornography or adult-related content.</li>
        <li>Promoting or facilitating prostitution or any escort services.</li>
        <li>Hosting, distributing, or linking to child pornography or content that is harmful to minors.</li>
        <li>Promoting or facilitating gambling, violence, terrorist activities, or selling weapons or ammunition.</li>
        <li>Engaging in the unlawful distribution of controlled substances, drug contraband, or prescription medications.</li>
        <li>Managing payment aggregators or facilitators such as processing payments on behalf of other businesses or charities.</li>
        <li>Facilitating pyramid schemes or other models intended to seek payments from public actors.</li>
        <li>Threatening harm to persons or property or otherwise harassing behavior.</li>
        <li>Infringing the intellectual property or other proprietary rights of others.</li>
        <li>Facilitating, aiding, or encouraging any of the above activities through the Website and Services.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">System Abuse</h2>
      <p className="mb-4 leading-relaxed">
        Any User in violation of the Website and Services security is subject to criminal and civil liability, as well as immediate
        account termination. Examples include, but are not limited to the following:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Use or distribution of tools designed to compromise the security of the Website and Services.</li>
        <li>Intentionally or negligently transmitting files containing a computer virus or corrupted data.</li>
        <li>Accessing another network without permission, including probing or scanning for vulnerabilities or breach security or
          authentication measures.</li>
        <li>Unauthorized scanning or monitoring of data on any network or system without proper authorization of the owner of the
          system or network.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Service Resources</h2>
      <p className="mb-4 leading-relaxed">
        You may not consume excessive amounts of the resources of the Website and Services or use the Website and Services in any
        way which results in performance issues or which interrupts the Services for other Users. Prohibited activities that
        contribute to excessive use, include without limitation:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Deliberate attempts to overload the Website and Services and broadcast attacks (i.e. denial of service attacks).</li>
        <li>Engaging in any other activities that degrade the usability and performance of the Website and Services.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">No Spam Policy</h2>
      <p className="mb-4 leading-relaxed">
        You may not use the Website and Services to send spam or bulk unsolicited messages. We maintain a zero-tolerance policy for
        the use of the Website and Services in any manner associated with the transmission, distribution, or delivery of any bulk
        e-mail, including unsolicited bulk or unsolicited commercial e-mail, or the sending, assisting, or commissioning the
        transmission of commercial e-mail that does not comply with the U.S. CAN-SPAM Act of 2003 (“SPAM”).
      </p>
      <p className="mb-4 leading-relaxed">
        Your products or services advertised via SPAM (i.e. Spamvertised) may not be used in conjunction with the Website and
        Services. This provision includes but is not limited to, SPAM sent via fax, phone, postal mail, email, instant messaging,
        or newsgroups.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Data Privacy</h2>
      <p className="mb-4 leading-relaxed">
        We do not share or sell SMS opt-in, or phone numbers for the purpose of SMS. SMS consent and phone number will never be
        shared, sold, or disclosed to any third party for marketing purposes.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Defamation and Objectionable Content</h2>
      <p className="mb-4 leading-relaxed">
        We value the freedom of expression and encourage Users to be respectful of the content they post. We are not a publisher of
        User content and are not in a position to investigate the veracity of individual defamation claims or to determine whether
        certain material, which we may find objectionable, should be censored. However, we reserve the right to moderate, disable,
        or remove any content to prevent harm to others, us, or the Website and Services, as determined in our sole discretion.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Copyrighted Content</h2>
      <p className="mb-4 leading-relaxed">
        Copyrighted material must not be published via the Website and Services without the explicit permission of the copyright
        owner or a person explicitly authorized to give such permission by the copyright owner. Upon receipt of a claim for copyright
        infringement, or a notice of such violation, we will immediately run a full investigation and, upon confirmation, will notify
        the person or persons responsible for publishing it and, in our sole discretion, will remove the infringing material from the
        Website and Services. We may terminate the Service of Users with repeated copyright infringements. Further procedures may be
        carried out if necessary.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Security</h2>
      <p className="mb-4 leading-relaxed">
        You take full responsibility for maintaining reasonable security precautions for your account. You are responsible for
        protecting and updating any login account provided to you for the Website and Services.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Enforcement</h2>
      <p className="mb-4 leading-relaxed">
        We reserve our right to be the sole arbiter in determining the seriousness of each infringement and to immediately take
        corrective actions. Including but not limited to:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Suspending or terminating your Service with or without notice upon any violation of this Policy.</li>
        <li>Disabling or removing any content which is prohibited by this Policy. Including to prevent harm to others or us or the
          Website and Services, as determined by us in our sole discretion.</li>
        <li>Reporting violations to law enforcement as determined by us in our sole discretion.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Reporting Violations</h2>
      <p className="mb-4 leading-relaxed">
        If you have discovered and would like to report a violation of this Policy, please contact us immediately. We will investigate
        the situation and provide you with full assistance.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Changes and Amendments</h2>
      <p className="mb-4 leading-relaxed">
        We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion.
        When we do, we will revise the updated date at the bottom of this page, post a notification on the main page of the Website,
        and send you an email to notify you. We may also provide notice to you in other ways at our discretion, such as through the
        contact information you have provided.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Acceptance of this Policy</h2>
      <p className="mb-4 leading-relaxed">
        You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the
        Website and Services, you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are
        not authorized to access or use the Website and Services. This policy has been created with the help of the acceptable use
        policy generator.
      </p>
    </div>
  );
};

export default PrivacyHome;
