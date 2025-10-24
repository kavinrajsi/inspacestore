"use client"
import React from 'react';
// import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-screen-md mx-auto mb-20 p-4 px-5 py-8 mt-[80px] leading-[25px] sm:leading-[40px]">
            <header className="mb-10 md:mb-16 place-items-center">
                <h1 className="text-3xl md:text-4xl font-bold flex items-center">
                    {/* <ShieldCheck className="mr-2 h-8 w-8" /> */}
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-600 mt-1">Effective Date: 01 Jan 2025</p>
            </header>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                <p>
                    Welcome to InspaceStore.in, your trusted source for premium retail display solutions and store fixtures.
                    We respect your privacy and are committed to protecting the personal information you share with us.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                <ul className="list-disc ml-6">
                    <li><strong>Personal Data:</strong> Name, email, phone number, shipping address.</li>
                    <li><strong>Usage Data:</strong> Pages visited, browsing time, IP address, device information.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. How We Use Your Data</h2>
                <ul className="list-disc ml-6">
                    <li>Process orders and deliver products</li>
                    <li>Respond to your inquiries</li>
                    <li>Improve website performance and user experience</li>
                    <li>Send updates, promotional offers, or newsletters (only if opted in)</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Sharing of Information</h2>
                <p>We do not sell or rent your personal data. We may share it with:</p>
                <ul className="list-disc ml-6">
                    <li>Delivery partners</li>
                    <li>Payment gateways</li>
                    <li>Service providers supporting our operations</li>
                </ul>
                <p>All partners are bound by strict confidentiality agreements.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking</h2>
                <p>
                    Our website uses cookies to enhance browsing, analyze traffic, and serve relevant ads. You can modify
                    your browser settings to disable cookies if you prefer.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
                <p>
                    We implement SSL encryption and secure server infrastructure to protect your information from
                    unauthorized access or misuse.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Third-Party Links</h2>
                <p>
                    InspaceStore.in may link to third-party websites. We are not responsible for the privacy
                    practices of these sites.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
                <p>
                    You have the right to access, modify, or request deletion of your personal data. For any
                    requests, please email us at <a href="mailto:contact@inspacestore.in" className="text-blue-600">
                        contact@inspacestore.in</a>.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">9. Updates to Policy</h2>
                <p>
                    We may update this Privacy Policy periodically. Please review this page regularly for
                    changes.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;