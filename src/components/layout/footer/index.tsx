"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "antd";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { message } from "antd";
import { NotificationState } from "@/components/common/ExpertForm";
import CustomNotification from "@/components/common/CustomNotification";

const Base = () => (
  <footer className="w-full py-4 px-5 flex justify-between items-center text-purple-900">
    <div className="text-[#040505] text-sm">
      © 2025 inspace. All rights reserved.
    </div>
    <div className="flex gap-6 !pr-2">
      <a href="/terms-and-conditions" className="text-sm text-[#040505] hover:underline">
        Terms of Service
      </a>
      <a href="/privacy-policy" className="text-sm text-[#040505] hover:underline">
        Privacy Policy
      </a>
      <a href="#" className="text-sm text-[#040505] hover:underline">
        Cookies
      </a>
    </div>
  </footer>
);

interface FormError {
  name: string;
  phone: string;
}

const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return "Name is required";
  }
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    return "Name should contain only alphabets and spaces";
  }
  if (name.trim().length < 2) {
    return "Name should be at least 2 characters long";
  }

  return null;
};

const validatePhoneNumber = (phoneNumber: string): string | null => {
  // Check if phone number is not empty
  if (!phoneNumber.trim()) {
    return "Phone number is required";
  }
  const phoneRegex = /^[0-9+\-\s]+$/;
  if (!phoneRegex.test(phoneNumber)) {
    return "Phone number should contain only digits";
  }
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    return "Please enter a valid phone number";
  }

  return null;
};

const RequestForm = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const [nameError, setNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setName(value);
    setNameError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setPhoneNumber(value);
    setPhoneError("");
  };

  const validateForm = (): boolean => {
    let isValid = true;

    const nameValidationError = validateName(name);
    if (nameValidationError) {
      setNameError(nameValidationError);
      isValid = false;
    }

    const phoneValidationError = validatePhoneNumber(phoneNumber);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          formType: 'footer'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setName("");
        setPhoneNumber("");
        setNotification({
          type: "success",
          message: "Form submitted successfully!",
        });
      } else {
        message.error("Failed to send your request. Please try again.");
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
  };

  return (
    <>
      {notification && (
        <CustomNotification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="bg-[#400043] rounded-2xl p-8 text-white max-w-md -mt-28">
        <h2 className="text-xl mb-1 text-purple-200">
          Seeking personalized support?
        </h2>
        <h3 className="text-xl mb-6">Request a call from our team</h3>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-[#400043] border-b border-white/50 py-3 px-1 text-white placeholder-white/50 focus:outline-none hover:bg-[#400043] active:bg-[#400043] focus:bg-[#400043] focus:border-white hover:border-white/50 active:border-white/50"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <p className="text-red-400 text-xs mt-1">{nameError}</p>}
          </div>
          <div>
            <Input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full bg-[#400043] border-b border-white/50 py-3 px-1 text-white placeholder-white/50 focus:outline-none hover:bg-[#400043] active:bg-[#400043] focus:bg-[#400043] focus:border-white hover:border-white/50 active:border-white/50"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
          </div>
          <button
            type="submit"
            className="mt-6 text-[#400043] bg-[#F0ABFC] px-6 py-2 rounded-full hover:bg-purple-300 transition-colors"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send a request"}
          </button>
        </form>
      </div>
    </>
  );
};

const MobileRequestForm = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const [nameError, setNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setName(value);
    setNameError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setPhoneNumber(value);
    setPhoneError("");
  };

  const validateForm = (): boolean => {
    let isValid = true;

    const nameValidationError = validateName(name);
    if (nameValidationError) {
      setNameError(nameValidationError);
      isValid = false;
    }

    const phoneValidationError = validatePhoneNumber(phoneNumber);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phoneNumber,
          formType: 'footer'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        message.success("Your request has been sent successfully!");
        setName("");
        setPhoneNumber("");
        setNotification({
          type: "success",
          message: "Form submitted successfully!",
        });
      } else {
        message.error("Failed to send your request. Please try again.");
        setNotification({
          type: "error",
          message: "Failed to submit form. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Something went wrong. Please try again later.");
      setNotification({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {notification && (
        <CustomNotification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      <div className="bg-[#400043] rounded-2xl p-8 text-white max-w-md -mt-28">
        <h2 className="text-lg mb-2 text-purple-200">
          Seeking personalized support?
        </h2>
        <h3 className="text-xl mb-6">Request a call from our team</h3>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              placeholder="YOUR NAME"
              className="w-full bg-[#400043] border-b border-white/50 py-3 px-1 text-white placeholder-white/50 focus:outline-none hover:bg-[#400043] active:bg-[#400043] focus:bg-[#400043] focus:border-white hover:border-white/50 active:border-white/50"
              value={name}
              onChange={handleNameChange}
            />
            {nameError && <p className="text-red-400 text-xs mt-1">{nameError}</p>}
          </div>
          <div>
            <Input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full bg-[#400043] border-b border-white/50 py-3 px-1 text-white placeholder-white/50 focus:outline-none hover:bg-[#400043] active:bg-[#400043] focus:bg-[#400043] focus:border-white hover:border-white/50 active:border-white/50"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
          </div>
          <button
            type="submit"
            className="mt-6 text-[#400043] bg-[#F0ABFC] px-6 py-2 rounded-full hover:bg-purple-300 transition-colors"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send a request"}
          </button>
        </form>
      </div>
    </>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <div className="p-3 pt-10">
            <MobileRequestForm />
          </div>
          <footer className="bg-white text-[#400043] py-8 px-4 border-t border-gray-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {/* Social Links */}
              <div className="flex  justify-between">
                <h3 className="font-bold mb-4 ml-2">FOLLOW US</h3>
                <div className="flex  space-x-4 text-xl">
                  <Link href="https://www.facebook.com/inspacestores.in">
                    <FaFacebookF />
                  </Link>
                  <Link href="https://www.instagram.com/inspacestore.in/?igsh=dmtnbnhpazl4M2Zr#">
                    <FaInstagram />
                  </Link>
                  <Link href="https://www.youtube.com/@inspace_store">
                    <FaYoutube />
                  </Link>
                  {/* <Link href="#">
                    <FaTwitter />
                  </Link> */}
                </div>
              </div>

              {/* Info & About Us */}
              <div className="flex justify-between mx-5 gap-10">
                <div>
                  <h3 className="font-bold mb-2">INFO</h3>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/aboutus">About us</Link>
                    </li>
                    <li>
                      <Link href="/projects">Works</Link>
                    </li>
                    <li>
                      <Link href="/contactus">Contact us</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2">ABOUT US</h3>
                  <ul className="space-y-1">
                    {/* <li>
                      <Link href="#">Gallery</Link>
                    </li> */}
                    <li>
                      <Link href="/insights">Insights</Link>
                    </li>
                    <li>
                      <Link href="/projects">Projects</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mx-5">
                <h3 className="font-bold mb-2">CONTACT US</h3>
                <p>+91 9840861493</p>
                <p>contact@inspacestore.in</p>
                <p>No:16, K.K Street,Kasthuri Industrial Estate, Ayanambakkam,Chennai-600 095. Tamil Nadu. India.
                </p>
              </div>
            </div>

            {/* Bottom Legal Section */}
            <div className="border-t border-gray-300 mt-6 flex justify-between pt-4 text-xs text-gray-600 text-center ">
              <p className="text-[8px]">&copy; 2025 Inspace. All rights reserved.</p>
              <div className="text-[8px] flex space-x-6 md:mt-0">
                <Link href="/terms-and-conditions">Terms of Service</Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="#">Cookies</Link>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          <div className="bg-[#FAE4FF] flex px-24 flex-col pb-6">
            <main className="flex-1 container py-4">
              <nav className="flex justify-between items-center mb-16">
                <div className="flex items-center px-3 pt-3">
                  <Link href="/">
                    <Image
                      src="/assets/logo.svg"
                      alt="inspace store"
                      width={250}
                      height={200}
                      layout="intrinsic"
                      priority
                    />
                  </Link>
                </div>
              </nav>

              <div className="grid grid-cols-1 px-6 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-12">
                  <div className="grid grid-cols-3">
                    <div className="space-y-8">
                      <h2 className="font-medium  text-[#400043]  mb-4">
                        INFO
                      </h2>
                      <ul className="space-y-2 text-black opacity-60">
                        <li>
                          <a href="/aboutus" className="hover:text-purple-900">
                            About us
                          </a>
                        </li>
                        <li>
                          <a href="/projects" className="hover:text-purple-900">
                            Works
                          </a>
                        </li>
                        <li>
                          <a href="/contactus" className="hover:text-purple-900">
                            Contact us
                          </a>
                        </li>
                      </ul>
                      <div className="flex gap-6">
                        <a
                          href="https://www.facebook.com/inspacestores.in"
                          className=" text-[#400043]  hover:text-purple-600"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/inspacestore.in/?igsh=dmtnbnhpazl4M2Zr#"
                          className=" text-[#400043]  hover:text-purple-600"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.youtube.com/@inspace_store"
                          className="text-[#400043]  hover:text-purple-600"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </a>
                        {/* <a
                          href="#"
                          className="text-[#400043]  hover:text-purple-600"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a> */}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h2 className="font-medium text-[#400043]  mb-4">
                        ABOUT US
                      </h2>
                      <ul className="space-y-2 text-black opacity-60">
                        {/* <li>
                          <a href="#" className="hover:text-purple-900">
                            Gallery
                          </a>
                        </li> */}
                        <li>
                          <a href="/insights" className="hover:text-purple-900">
                            Insights
                          </a>
                        </li>
                        <li>
                          <a href="/projects" className="hover:text-purple-900">
                            Projects
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-8">
                      <h2 className="font-medium text-[#400043] mb-4">
                        CONTACT US
                      </h2>
                      <ul className="space-y-2 text-black opacity-60">
                        <li>+91 9840861493</li>
                        <li>contact@inspacestore.in</li>
                        <li>
                          No:16, K.K Street,<br /> Kasthuri Industrial Estate, Ayanambakkam,
                          <br />
                          Chennai-600 095,<br /> Tamil Nadu, India.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <RequestForm />
                </div>
              </div>
            </main>
            <div className="h-[2px] ml-7 my-5 bg-gray-300 w-[96%]"></div>
            <Base />
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
