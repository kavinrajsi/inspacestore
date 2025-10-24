"use client"
import React from 'react';
// import { FileText } from 'lucide-react';

const TermsAndConditions = () => {
    return (
        <div className="max-w-screen-md mx-auto mb-20 p-4 px-5 py-8 mt-[80px] leading-[25px] sm:leading-[40px]">
            <header className="mb-10 md:mb-16 place-items-center">
                <h1 className="text-3xl md:text-4xl font-bold flex items-center">
                    {/* <FileText className="mr-2 h-8 w-8" /> */}
                    Terms & Conditions
                </h1>
                <p className="text-sm text-gray-600 mt-1">Effective Date: 01 Jan 2025</p>
            </header>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                <p>
                    Welcome to InspaceStore.in. By accessing this website, you agree to be bound by these Terms & Conditions.
                    Please read them carefully.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Use of the Website</h2>
                <p>
                    You agree to use this site only for lawful purposes. You must not misuse this website, tamper
                    with its functionality, or attempt unauthorized access.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Product Information</h2>
                <p>
                    All product descriptions, images, specifications, and pricing are accurate to the best of our
                    knowledge. However, we reserve the right to correct errors and update product details without
                    prior notice.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Orders and Payments</h2>
                <p>
                    All orders placed through the website are subject to availability and acceptance. Payment must
                    be completed through our approved methods. We reserve the right to cancel orders in case of
                    pricing errors or suspected fraud.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Shipping & Delivery</h2>
                <p>
                    Shipping timelines are estimates and may vary due to external factors. Inspace is not
                    responsible for delays caused by logistics providers.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Returns & Cancellations</h2>
                <p>
                    Due to the customized nature of our products, returns are accepted only for manufacturing
                    defects. Cancellations must be requested within 24 hours of order placement.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
                <p>
                    All content on this website including text, images, logos, and designs are the property of
                    Inspace Store and may not be used or reproduced without written permission.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
                <p>
                    InspaceStore.in shall not be liable for any indirect or consequential damages arising from the
                    use of our products or website.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
                <p>
                    These terms shall be governed by the laws of Tamil Nadu, India. Any disputes will be handled
                    in the courts of Chennai jurisdiction.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
                <p>
                    For any questions regarding these terms, please contact us at:<br />
                    <a href="mailto:contact@inspacestore.in" className="text-blue-600">contact@inspacestore.in</a><br />
                    +91 98408 61493
                </p>
            </section>
        </div>
    );
};

export default TermsAndConditions;
