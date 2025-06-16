import { FaGithub, FaEnvelope, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Kiran Thakur. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-3 md:mt-0 text-xl">
          <a
            href="mailto:kiranthakur1407@gmail.com"
            className="hover:text-pink-400 transition-all"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/kiranthakurcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/9912018462"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
