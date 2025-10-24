"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { LoadingOutlined } from "@ant-design/icons";
import { NotificationState } from "../common/ExpertForm";
import CustomNotification from "../common/CustomNotification";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  whatsappUpdates?: boolean;
  formType: 'contact';
}

interface MobileFormData {
  name: string;
  email: string;
  phone: string;
  projectLocation: string;
  whatsappUpdates?: boolean;
  formType: 'insight';
}

const HeroContactPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationState | null>(
    null
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    formType: 'contact'
  });

  const [mobileFormData, setMobileFormData] = useState<MobileFormData>({
    name: "",
    email: "",
    phone: "",
    projectLocation: "",
    formType: 'insight'
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setMobileFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const downloadCatalogue = () => {
    const link = document.createElement("a");
    link.href = "/assets/catalogues/inspaceCatalogue.pdf";
    link.download = "INSPACE-Catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const validateForm = (data: FormData | MobileFormData) => {
    const newErrors: Record<string, string> = {};
    if ("name" in data) {
      if (!data.name.trim()) {
        newErrors.name = "Name is required";
      }
    } else {
      if (!data.firstName.trim()) {
        newErrors.firstName = "First name is required";
      }
      if (!data.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      }
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email address";
    }

    if ("phone" in data) {
      if (!data.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!/^\d{10}$/.test(data.phone)) {
        newErrors.phone = "Invalid phone number";
      }
    } else {
      if (!data.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      } else if (!/^\d{10}$/.test(data.phoneNumber)) {
        newErrors.phoneNumber = "Invalid phone number";
      }
    }

    if ("projectLocation" in data) {
      if (!data.projectLocation.trim()) {
        newErrors.projectLocation = "Project location is required";
      }
    } else {
      if (!data.message.trim()) {
        newErrors.message = "Message is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = isMobile ? mobileFormData : formData;
    if (!validateForm(data)) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setFormSubmitted(true);
        setNotification({
          type: "success",
          message: "Form submitted successfully!",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      whatsappUpdates: false,
      formType: 'contact'
    });
    setMobileFormData({
      name: "",
      email: "",
      phone: "",
      projectLocation: "",
      whatsappUpdates: false,
      formType: 'insight'
    });
  };

  const SuccessMessage = () => (
    <div className="text-center">
      <div className="mb-4">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900">Thank you!</h3>
      <p className="mt-1 text-sm text-gray-600">
      Our design team will contact you shortly.
      </p>
      <div className="flex justify-center items-center">
      <button
        onClick={() => downloadCatalogue()}
        className="mt-4 bg-[#400043] text-white py-2 px-4 rounded-xl hover:bg-[#400043] transition-colors duration-300 text-[10px] sm:text-[14px] mr-2"
      >
        Download Catalogue
      </button>
      <button
        onClick={resetForm}
        className="mt-4 bg-[#400043] text-white py-2 px-4 rounded-xl hover:bg-[#400043] transition-colors duration-300 text-[10px] sm:text-[14px]"
      >
        Submit Another Request
      </button>
      </div>
     
    </div>
  );

  return (
    <>
      <div className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/contactus/contact-hero.svg"
            alt="contact hero"
            fill
            className="w-full h-full object-cover object-center min-w-full min-h-full"
            priority
          />
        </div>
        <Navbar />
        {isMobile ? (
          <>
            {notification && (
              <CustomNotification
                type={notification.type}
                message={notification.message}
                onClose={() => setNotification(null)}
              />
            )}
            <div className="relative h-full flex flex-col items-center justify-center px-4 py-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-sm"
              >
                <div className="w-full bg-white -mb-48 shadow-lg rounded-xl py-6 px-4">
                  {formSubmitted ? (
                    <SuccessMessage />
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-center text-[#333333] mb-1">
                        Talk To Our Designer
                      </h2>
                      <p className="text-gray-600 text-[10px] text-center mb-4">
                        Get expert design advice and personalized recommendations.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Name Field */}
                        <div className="flex flex-col">
                          <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                            Name <span className="text-red-500">*</span>
                          </span>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={mobileFormData.name}
                            onChange={handleMobileChange}
                            className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.name ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                          )}
                        </div>
                        {/* Email Field */}
                        <div className="flex flex-col">
                          <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                            Email <span className="text-red-500">*</span>
                          </span>
                          <input
                            type="email"
                            name="email"
                            placeholder="INSPACE@gmail.com"
                            value={mobileFormData.email}
                            onChange={handleMobileChange}
                            className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.email ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                        {/* Phone Field */}
                        <div className="flex flex-col">
                          <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                            Phone Number <span className="text-red-500">*</span>
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            value={mobileFormData.phone}
                            onChange={handleMobileChange}
                            className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.phone ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                          )}
                        </div>
                        {/* Project Location Field */}
                        <div className="flex flex-col">
                          <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                            Project Location <span className="text-red-500">*</span>
                          </span>
                          <input
                            type="text"
                            name="projectLocation"
                            placeholder="Enter location"
                            value={mobileFormData.projectLocation}
                            onChange={handleMobileChange}
                            className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.projectLocation ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.projectLocation && (
                            <p className="text-red-500 text-xs mt-1">{errors.projectLocation}</p>
                          )}
                        </div>
                        {/* WhatsApp Updates */}
                        {/* <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="whatsappUpdates"
                          checked={mobileFormData.whatsappUpdates}
                          onChange={handleMobileChange}
                          className="mr-2 text-[#4A044E] focus:ring-purple-500"
                        />
                        <label className="text-gray-700 text-[10px]">
                          Send me Update on Whatsapp
                        </label>
                      </div> */}
                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-[#400043] text-xs text-white py-2 rounded-3xl hover:bg-[#400043] transition-colors duration-300 flex items-center justify-center"
                        >
                          {loading ? (
                            <LoadingOutlined className="mr-2" />
                          ) : null}
                          {loading ? "Submitting" : "GET QUOTE & DOWNLOAD CATALOGUE"}
                        </button>
                        <p className="text-[10px] text-center text-black mt-2">
                          By submitting this form, you agree to the privacy policy &
                          terms and conditions
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        ) : (
          <>
            {notification && (
              <CustomNotification
                type={notification.type}
                message={notification.message}
                onClose={() => setNotification(null)}
              />
            )}
            <div className="relative h-full flex flex-col justify-end px-[5%] py-[3%]">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full max-w-lg bg-white shadow-lg rounded-xl py-8 px-10">
                  {formSubmitted ? (
                    <SuccessMessage />
                  ) : (
                    <>
                      <h2 className="text-3xl flex font-bold text-center text-[#333333] mb-2">
                        Talk To Our Designer
                      </h2>
                      <p className="flex text-gray-600 text-[12px] mb-6">
                        Get expert design advice, creative solutions, and
                        personalized recommendations from our professional
                        designers.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Fields */}
                        <div className="flex items-center space-x-4">
                          <div className="flex flex-col">
                            <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                              First Name <span className="text-red-500">*</span>
                            </span>
                            <input
                              type="text"
                              name="firstName"
                              placeholder="Enter First name"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.firstName ? "border-red-500" : ""
                                }`}
                              required
                            />
                            {errors.firstName && (
                              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                              Last Name <span className="text-red-500">*</span>
                            </span>
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Enter Last name"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.lastName ? "border-red-500" : ""
                                }`}
                              required
                            />
                            {errors.lastName && (
                              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                            )}
                          </div>
                        </div>
                        {/* Email Field */}
                        <div className="flex flex-col">
                          <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                            Email <span className="text-red-500">*</span>
                          </span>
                          <input
                            type="email"
                            name="email"
                            placeholder="INSPACE@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.email ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                        {/* Phone Field */}
                        <div className="flex flex-col">
                          <span className="text-[12px] leading-3 text-[#4C4C4C] font-normal">
                            Phone Number <span className="text-red-500">*</span>
                          </span>
                          <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.phoneNumber ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.phoneNumber && (
                            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
                          )}
                        </div>
                        {/* WhatsApp Updates */}
                        {/* <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="whatsappUpdates"
                          checked={formData.whatsappUpdates}
                          onChange={handleChange}
                          className="mr-2 text-[#4A044E] focus:ring-purple-500"
                        />
                        <label className="text-gray-700 text-[10px]">
                          Send me Update on Whatsapp
                        </label>
                      </div> */}
                        {/* Message Field */}
                        <div className="flex flex-col">
                          <span className="text-[12px] leading-4 text-[#4C4C4C] font-normal">
                            Message <span className="text-red-500">*</span>
                          </span>
                          <input
                            type="text"
                            name="message"
                            placeholder="Enter your message..."
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full border-b border-[#4C4C4C] p-2 focus:outline-none placeholder:text-sm ${errors.message ? "border-red-500" : ""
                              }`}
                            required
                          />
                          {errors.message && (
                            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                          )}
                        </div>
                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-[#400043] text-white py-2 rounded-3xl hover:bg-[#400043] transition-colors duration-300 flex items-center justify-center"
                        >
                          {loading ? (
                            <LoadingOutlined className="mr-2" />
                          ) : null}
                          {loading ? "Submitting" : "GET QUOTE & DOWNLOAD CATALOGUE"}
                        </button>
                        <p className="text-[10px] text-center text-black mt-2">
                          By submitting this form, you agree to the privacy policy &
                          terms and conditions
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HeroContactPage;