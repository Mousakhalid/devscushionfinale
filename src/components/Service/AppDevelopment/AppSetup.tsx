import Link from 'next/link';

const AppSetup = () => {
    return (
        <div className="py-32 flex flex-col items-center">
            <h2 className="font-semibold text-4xl font-mono text-gray-700 mb-10 px-8">How to Set Up Your Mobile App</h2>

            <div className="max-w-4xl w-full px-4"> {/* Add side padding here */}
                <div className="bg-white border-t-4 rounded-xl border-[#6f2fa1] space-y-5 py-8 px-8 mb-8">
                    <h3 className="font-semibold text-2xl text-gray-700">1. Register Developer Accounts</h3>
                    <p className="text-gray-500">
                        <strong>Google Play Store:</strong> Create a <a href="https://play.google.com/console/about/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Google Play Developer account</a>. 
                        You'll need to pay a one-time registration fee and link your account to a Google Wallet Merchant Account.
                    </p>
                    <p className="text-gray-500">
                        <strong>Apple App Store:</strong> Enroll in the <a href="https://developer.apple.com/programs/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Apple Developer Program</a>. This requires an annual fee and provides access to app distribution and development tools.
                    </p>
                </div>

                <div className="bg-white border-t-4 rounded-xl border-[#6f2fa1] space-y-5 py-8 px-8 mb-8">
                    <h3 className="font-semibold text-2xl text-gray-700">2. Create an Application</h3>
                    <p className="text-gray-500">
                        <strong>Google Play Store:</strong> In the Google Play Console, select "Create Application," choose a default language, and give your app a title.
                    </p>
                    <p className="text-gray-500">
                        <strong>Apple App Store:</strong> Use <a href="https://appstoreconnect.apple.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">App Store Connect</a> to create a new app record.
                    </p>
                </div>

                <div className="bg-white border-t-4 rounded-xl border-[#6f2fa1] space-y-5 py-8 px-8 mb-8">
                    <h3 className="font-semibold text-2xl text-gray-700">3. App Store Listing</h3>
                    <p className="text-gray-500">
                        <strong>Google Play Store:</strong> Complete the app store listing by providing a detailed description, app icon, screenshots, and promotional graphics.
                    </p>
                    <p className="text-gray-500">
                        <strong>Apple App Store:</strong> Fill out the app store listing with your app’s name, description, keywords, support URL, and marketing URL.
                    </p>
                </div>

                <div className="bg-white border-t-4 rounded-xl border-[#6f2fa1] space-y-5 py-8 px-8 mb-8">
                    <h3 className="font-semibold text-2xl text-gray-700">4. Upload Your App Files</h3>
                    <p className="text-gray-500">
                        <strong>Google Play Store:</strong> Upload the <strong>App Bundle (AAB)</strong> or <strong>APK</strong> file via the Google Play Console.
                    </p>
                    <p className="text-gray-500">
                        <strong>Apple App Store:</strong> Use <a href="https://developer.apple.com/xcode/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Xcode</a> or <a href="https://apps.apple.com/us/app/transporter/id1450874784" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Transporter</a> to upload your app file (IPA) to App Store Connect.
                    </p>
                </div>

                <div className="bg-white border-t-4 rounded-xl border-[#6f2fa1] space-y-5 py-8 px-8 mb-8">
                    <h3 className="font-semibold text-2xl text-gray-700">5. Rate Your Content</h3>
                    <p className="text-gray-500">
                        <strong>Google Play Store:</strong> Assign a content rating to your app based on its content.
                    </p>
                    <p className="text-gray-500">
                        <strong>Apple App Store:</strong> Complete the content rating questionnaire to determine your app’s appropriate age rating.
                    </p>
                </div>

                <div className="bg-white border-t-4 rounded-xl border-[#6f2fa1] space-y-5 py-8 px-8 mb-8">
                    <h3 className="font-semibold text-2xl text-gray-700">6. Set Pricing and Distribution</h3>
                    <p className="text-gray-500">
                        <strong>Google Play Store:</strong> Decide on the app's pricing (free or paid) and select the countries where you want your app to be available.
                    </p>
                    <p className="text-gray-500">
                        <strong>Apple App Store:</strong> Set your app's pricing tier and availability in different countries.
                    </p>
                </div>

                <div className="bg-white border-t-4 rounded-xl border-[#6f2fa1] space-y-5 py-8 px-8 mb-8">
                    <h3 className="font-semibold text-2xl text-gray-700">7. Launch Your App!</h3>
                    <p className="text-gray-500">
                        <strong>Google Play Store:</strong> Review your app details and click on “Launch” to submit it for review.
                    </p>
                    <p className="text-gray-500">
                        <strong>Apple App Store:</strong> Submit your app for review in App Store Connect. After approval, your app will be available for download.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppSetup;
