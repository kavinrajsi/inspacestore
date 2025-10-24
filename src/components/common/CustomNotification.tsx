"use client";

import React, { useEffect, useState } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { Form, Input, Button } from "antd";

// Define notification interface
interface NotificationState {
  type: 'success' | 'error';
  message: string;
}

// Custom Notification Component
interface CustomNotificationProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const CustomNotification: React.FC<CustomNotificationProps> = ({ type, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Allow animation to complete before removal
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div 
      className={`fixed top-5 right-5 flex items-center p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      } ${
        type === 'success' ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'
      }`}
      style={{ zIndex: 1050, minWidth: '300px' }}
    >
      <div className="mr-3">
        {type === 'success' ? (
          <CheckCircle className="text-green-500" size={20} />
        ) : (
          <AlertTriangle className="text-red-500" size={20} />
        )}
      </div>
      <div className="flex-grow">
        <p className={`font-medium ${type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
          {message}
        </p>
      </div>
      <button 
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-4"
      >
        <X size={16} className={type === 'success' ? 'text-green-500' : 'text-red-500'} />
      </button>
    </div>
  );
};

export default CustomNotification;