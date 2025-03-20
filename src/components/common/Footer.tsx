import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-content py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Kinetic.Email</h3>
            <p className="text-gray-600">
              A resource hub for interactive, engaging, and dynamic email experiences that push the boundaries of traditional email design.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learn" className="text-gray-600 hover:text-primary-600">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-gray-600 hover:text-primary-600">
                  Examples Gallery
                </Link>
              </li>
              <li>
                <Link to="/playground" className="text-gray-600 hover:text-primary-600">
                  Interactive Playground
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/yourusername/kinetic-email" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-center">
            © {currentYear} Kinetic.Email. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;