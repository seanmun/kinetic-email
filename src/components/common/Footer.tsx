import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-content py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">About Me</h3>
            <p className="text-gray-600">
              <strong>Sean Munley</strong> - Kinetic email expert with a decade of experience crafting interactive email experiences. I've built <strong>hundreds of kinetic emails</strong> for <strong>dozens of brands</strong>, helping them enhance engagement and first-party data strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Acknowledgments</h3>
            <p className="text-gray-600">
              Kinetic email is a craft shaped by the brilliant work of the email developer community. I've learned invaluable insights from these pioneers in interactive email:
            </p>
            <ul className="space-y-1 mt-2">
              <li className="text-gray-600">• <strong>Marc Robbins</strong> – <a href="https://www.goodemailcode.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">Good Email Code</a></li>
              <li className="text-gray-600">• <strong>Justin Khoo</strong> – <a href="https://freshinbox.com/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">FreshInbox</a></li>
              <li className="text-gray-600">• <strong>Jay Oram</strong> – <a href="https://www.actionrocket.co/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">Action Rocket</a></li>
            </ul>
            <p className="text-gray-600 mt-2">
              This site is my way of <strong>paying it forward</strong>, sharing knowledge, and helping more email developers create next-level interactive experiences.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 pb-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Contact Me</h3>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/seanmun" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sean-munley/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              LinkedIn
            </a>
            <a href="https://seanmun.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
              SeanMun.com
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © {currentYear} Kinetic.Email. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;