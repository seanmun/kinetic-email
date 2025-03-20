import React, { useState, useEffect, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Effect for handling modal open/close animations
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // When closing, wait for animation before removing from DOM
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match duration with CSS transition
      document.body.style.overflow = 'unset';
      
      // Clean up timer if component unmounts during animation
      return () => clearTimeout(timer);
    }
    
    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Don't render anything if modal is closed and not animating
  if (!isOpen && !isAnimating) return null;

  const modalClasses = isOpen 
    ? 'opacity-100 scale-100' 
    : 'opacity-0 scale-95';

  const backdropClasses = isOpen
    ? 'opacity-50'
    : 'opacity-0';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${backdropClasses}`}
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div 
        className={`bg-white rounded-lg shadow-xl z-10 max-w-md w-full mx-auto overflow-hidden transition-all duration-300 transform ${modalClasses}`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path 
                fillRule="evenodd" 
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;