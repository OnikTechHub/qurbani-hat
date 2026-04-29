import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* About Section */}
                <div>
                    <h3 className="text-xl font-bold text-orange-500 mb-4">About QurbaniHat</h3>
                    <p className="text-gray-400">
                        The most trusted platform to find local and premium breeds of Qurbani animals. Our goal is to make your Qurbani easy and enjoyable.
                    </p>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold text-orange-500 mb-4">Contact Info</h3>
                    <p className="text-gray-400">Email: onik@gmail.com</p>
                    <p className="text-gray-400">Phone: +8801827511641</p>
                    <p className="text-gray-400">Location: Chattogram City, Bangladesh</p>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="text-xl font-bold text-orange-500 mb-4">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="#" className="text-2xl hover:text-orange-500 transition-colors"><FaFacebook /></a>
                        <a href="#" className="text-2xl hover:text-orange-500 transition-colors"><FaTwitter /></a>
                        <a href="#" className="text-2xl hover:text-orange-500 transition-colors"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                © 2026 QurbaniHat. All rights reserved. | Designed for a better Qurbani experience.
            </div>
        </footer>
    );
};

export default Footer;