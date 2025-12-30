import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../common/Modal';
import { FaGithub, FaLinkedin, FaGlobe, FaBolt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Modal states
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Modal handlers
  const openModal = (modalName: string) => {
    setActiveModal(null);
    setTimeout(() => {
      setActiveModal(modalName);
    }, 10);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <FaBolt className="text-cyan-400 text-2xl" />
                <h3 className="text-xl font-bold">Kinetic.email</h3>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed mb-4">
                Your resource hub for building dynamic, interactive email experiences that push the boundaries of traditional email design.
              </p>
            </div>

            {/* Learn Section */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">Learn</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/learn" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Learning Modules
                  </Link>
                </li>
                <li>
                  <Link to="/examples" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link to="/playground" className="text-blue-200 hover:text-white transition-colors text-sm">
                    AI Playground
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/media" className="text-blue-200 hover:text-white transition-colors text-sm">
                    Brand & Media Kit
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => openModal('acknowledgments')}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    Acknowledgments
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => openModal('privacy')}
                    className="text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-cyan-400">Connect</h4>
              <p className="text-blue-200 text-sm mb-4">
                Built by Sean Munley
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/seanmun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sean-munley/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="https://seanmun.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="Portfolio Website"
                >
                  <FaGlobe className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-300 text-sm">
                © {currentYear} Kinetic.email. All rights reserved.
              </p>
              <p className="text-blue-300 text-sm">
                Empowering email developers to create interactive experiences.
              </p>
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