"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "antd";
import CustomNotification from "./CustomNotification";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

interface TalkToDesignProps {
  backgroundImage: string;
  staticWords?: boolean;
  onSubmit?: (formData: FormData) => void;
}

export interface NotificationState {
  type: "success" | "error";
  message: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectLocation: string;
  formType: 'insight'
}

const TalkToDesign = ({ backgroundImage, staticWords }: TalkToDesignProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectLocation: "",
    formType: 'insight'
  });
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Custom CSS for input styles and button hover
  const customStyles = useMemo(() => `
    .ant-input:hover {
      border-color: #4A044E !important;
    }
    .ant-input:focus, .ant-input-focused {
      border-color: #4A044E !important;
      box-shadow: 0 0 0 2px rgba(74, 4, 78, 0.1) !important;
    }
    .ant-btn-primary:hover, .ant-btn-primary:focus {
      background-color: #3A0340 !important;
      border-color: #3A0340 !important;
    }
    .error-input {
      border-color: #ff4d4f !important;
    }
    .error-message {
      color: #ff4d4f;
      font-size: 12px;
      margin-top: 4px;
    }
  `, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Project location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({
          type: "success",
          message: "Form submitted successfully!",
        });
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectLocation: "",
          formType: 'insight'
        });
      } else {
        setNotification({
          type: "error",
          message: "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotification({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }, [formData, validateForm]);

  const resetForm = useCallback(() => {
    setFormSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectLocation: "",
      formType: 'insight'
    });
    setErrors({});
  }, []);

  const FormContent = useMemo(() => (
    <div>
      <style>{customStyles}</style>
      <div className="bg-white rounded-xl shadow-lg p-6 -mt-12">
        <div className="flex items-center gap-5 bg-[#F5D0FE] px-4 py-2 rounded-xl">
          <button className="text-lg text-[#4A044E] hover:text-gray-900">
            <X size={20} />
          </button>
          <p className="text-lg text-[#4A044E] font-[300]">
            Talk To Our Design Expert
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          {/* Name Field */}
          <div className="mb-2">
            <label className="text-xs font-normal text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none ${errors.name ? "error-input" : ""
                }`}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          {/* Email Field */}
          <div className="mb-2">
            <label className="text-xs font-normal text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none ${errors.email ? "error-input" : ""
                }`}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          {/* Phone Field */}
          <div className="mb-2">
            <label className="text-xs font-normal text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none ${errors.phone ? "error-input" : ""
                }`}
            />
            {errors.phone && <div className="error-message">{errors.phone}</div>}
          </div>

          {/* Project Location Field */}
          <div className="mb-2">
            <label className="text-xs font-normal text-gray-700">
              Project Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="projectLocation"
              value={formData.projectLocation}
              onChange={handleChange}
              placeholder="Enter project location"
              className={`w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none ${errors.projectLocation ? "error-input" : ""
                }`}
            />
            {errors.projectLocation && <div className="error-message">{errors.projectLocation}</div>}
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="primary"
              htmlType="submit"
              disabled={loading}
              className="w-full bg-[#4A044E] text-white py-2 rounded-md text-sm font-semibold transition mt-2"
              style={{ backgroundColor: "#4A044E", borderColor: "#4A044E", color: '#fff' }}
            >
              {loading ? (
                <LoadingOutlined className="mr-1" color="#ffff" />
              ) : null}
              {loading ? "Submitting" : "Submit"}
            </Button>
          </div>
        </form>

        {/* Privacy Policy */}
        <p className="mt-3 text-xs text-gray-500 text-left">
          By submitting this form, you agree to the{" "}
          <span onClick={() => router.push('/privacy-policy')} className="text-[#4A044E] cursor-pointer">privacy policy</span>{" "}
          &{" "}
          <span onClick={() => router.push('/terms-and-conditions')} className="text-[#4A044E] cursor-pointer">
            terms and conditions
          </span>
        </p>
      </div>
    </div>
  ), [customStyles, formData, errors, handleChange, handleSubmit, loading, router]);

  const SuccessMessage = useMemo(() => (
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
      <button
        onClick={resetForm}
        className="mt-4 bg-[#400043] text-white py-2 px-4 rounded-3xl hover:bg-[#400043] transition-colors duration-300 text-[12px] sm:text-[14px]"
      >
        Submit Another Request
      </button>
    </div>
  ), [resetForm]);

  return (
    <>
      {notification && (
        <CustomNotification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      {isMobile ? (
        <div className="mx-[16px]">
          <div className="relative w-full h-[600px] mb-32 flex justify-start items-center my-10 bg-gray-900 rounded-xl">
            <div className="absolute inset-0">
              <Image
                src={backgroundImage}
                alt="Dream Home"
                fill
                objectFit="cover"
                className="rounded-xl"
                priority
              />
            </div>

            <div className="relative h-[450px] w-[500px] px-[5%]">
              {formSubmitted ? (
                <div className="w-full max-w-lg bg-white shadow-lg rounded-xl py-8 px-10">
                  {SuccessMessage}
                </div>
              ) : (
                FormContent
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-[38px] my-20">
          <div className="relative w-full h-[600px] flex justify-start items-center my-10 bg-gray-900 rounded-xl">
            <div className="absolute inset-0">
              <Image
                src={backgroundImage}
                alt="Dream Home"
                fill
                objectFit="cover"
                className="rounded-xl"
                priority
              />
            </div>

            <div className="relative h-[380px] w-[500px] px-[5%]">
              {formSubmitted ? (
                <div className="w-full max-w-lg bg-white shadow-lg rounded-xl py-8 px-10">
                  {SuccessMessage}
                </div>
              ) : (
                FormContent
              )}
            </div>
            {staticWords && (
              <div className="relative mb-56 text-right">
                <h1 className="text-5xl font-normal text-white mb-2">
                  Your{" "}
                  <span className="text-yellow-400 font-bold">Dream Home</span>{" "}
                  Is Just A Click
                </h1>
                <h2 className="text-5xl text-start font-normal text-white">
                  Away
                </h2>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default TalkToDesign;