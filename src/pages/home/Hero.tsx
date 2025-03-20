import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="container-content">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive Emails That Engage Your Audience
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Kinetic.Email is your resource hub for building dynamic email experiences that push the boundaries of traditional email design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/examples" className="btn bg-white text-primary-700 hover:bg-primary-50">
              See Examples
            </Link>
            <Link to="/learn" className="btn bg-transparent border border-white hover:bg-primary-700">
              Learn How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;