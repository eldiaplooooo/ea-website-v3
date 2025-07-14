import React from 'react';
import { X, Calendar, Phone, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Book Your AI Strategy Call
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Ready to transform your business with AI? Schedule a free 30-minute strategy call with our experts.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm text-blue-800 dark:text-blue-300">30-minute consultation</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-sm text-green-800 dark:text-green-300">Free of charge</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm text-purple-800 dark:text-purple-300">Personalized AI roadmap</span>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Schedule Call via Calendly
          </button>
          <a 
            href="mailto:ali.h@easolutions.de"
            className="w-full block text-center border border-gray-300 dark:border-gray-600 py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
          >
            Email us directly
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;