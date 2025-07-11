
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 pt-10 pb-6 px-6 md:px-20 dark:bg-teal-900 dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-teal-600">HabitFlow</h2>
          <p className="mt-2 text-sm text-gray-600 dark:bg-teal-900 dark:text-white">
            Build strong habits, track your progress, and stay motivated every day.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-teal-600 font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@habitflow.com</p>
          <p className="text-sm">Phone: +92 123 4567890</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-teal-600 font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-xl text-teal-500">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-teal-700">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-teal-700">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-teal-700">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HabitFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
