import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal'; // Adjust the import path as needed

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  // Modal handlers
  const openModal = (modalName: string) => {
    // First ensure any previously active modal is fully closed
    setActiveModal(null);
    
    // Use a small timeout to ensure state update happens before opening new modal
    setTimeout(() => {
      setActiveModal(modalName);
    }, 10);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };
  
  return (
    <>
      <footer className="bg-gray-50 border-t">
        <div className="container-content py-6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="text-gray-600 mb-4 md:mb-0">
                © {currentYear} Kinetic.email. <Link to="/admin" className="hover:text-gray-800 transition-colors">All rights reserved</Link>.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">

              
              <button 
                onClick={() => openModal('acknowledgments')} 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Acknowledgments
              </button>
              
              <button 
                onClick={() => openModal('privacy')} 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                Privacy Policy
              </button>
              
              <a 
                href="https://github.com/seanmun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                GitHub
              </a>
              
              <a 
                href="https://www.linkedin.com/in/sean-munley/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                LinkedIn
              </a>
              
              <a 
                href="https://seanmun.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                SeanMun.com
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* About Me Modal */}
      <Modal 
        isOpen={activeModal === 'about'} 
        onClose={closeModal} 
        title="About Me"
      >
        <div className="prose prose-sm">
          <p>
            <strong>Sean Munley</strong> - Kinetic email expert with a decade of experience crafting interactive email experiences.
          </p>
          <p>
            I've built <strong>hundreds of kinetic emails</strong> for <strong>dozens of brands</strong>, helping them enhance engagement and first-party data strategies.
          </p>
          <p>
            Kinetic.Email is my platform for sharing knowledge and expertise with the email developer community, helping others create more engaging and interactive email campaigns.
          </p>
        </div>
      </Modal>
      
      {/* Acknowledgments Modal */}
      <Modal 
        isOpen={activeModal === 'acknowledgments'} 
        onClose={closeModal} 
        title="Acknowledgments"
      >
        <div className="prose prose-sm">
          <p>
            Kinetic email is a craft shaped by the brilliant work of the email developer community. I've learned invaluable insights from these pioneers in interactive email:
          </p>
          <ul className="space-y-2 mt-2">
            <li>
              <strong>Marc Robbins</strong> – <a href="https://www.goodemailcode.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Good Email Code</a>
            </li>
            <li>
              <strong>Justin Khoo</strong> – <a href="https://freshinbox.com/blog/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">FreshInbox</a>
            </li>
            <li>
              <strong>Jay Oram</strong> – <a href="https://www.actionrocket.co/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Action Rocket</a>
            </li>
          </ul>
          <p className="mt-4">
            This site is my way of <strong>paying it forward</strong>, sharing knowledge, and helping more email developers create next-level interactive experiences.
          </p>
        </div>
      </Modal>
      
      {/* Privacy Policy Modal */}
      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={closeModal} 
        title="Privacy Policy"
      >
        <div className="prose prose-sm">
          <h4>Information Collection</h4>
          <p>
            Kinetic.Email collects minimal information necessary to provide our services. We may collect analytics data to improve site performance and user experience.
          </p>
          
          <h4>Use of Information</h4>
          <p>
            Any information collected is used solely to enhance your experience and improve our site. We do not sell or share your personal data with third parties.
          </p>
          
          <h4>Cookies</h4>
          <p>
            We use cookies to enhance your browsing experience. You can disable cookies in your browser settings at any time.
          </p>
          
          <h4>Third-Party Links</h4>
          <p>
            Our website may contain links to external sites. We are not responsible for the content or privacy practices of these sites.
          </p>
          
          <h4>Contact</h4>
          <p>
            If you have any questions about our privacy practices, please contact us via email or social media.
          </p>
          
          <p className="text-sm text-gray-500 mt-4">
            Last updated: March 2025
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Footer;