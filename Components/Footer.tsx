import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left-aligned logo/brand */}
          <div className="lg:flex-1 w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="font-medium">AI Startup Landing Page</div>
          </div>

          {/* Centered navigation links */}
          <nav className="flex-1 flex flex-col lg:flex-row items-center gap-5 lg:gap-7">
            <a href="#" className="nav-foot-links text-xs md:text-sm">
              Cap🧢
            </a>
            <a href="#" className="nav-foot-links text-xs md:text-sm">
              Cap🧢
            </a>
            <a href="#" className="nav-foot-links text-xs md:text-sm">
              Cap🧢
            </a>
            <a href="#" className="nav-foot-links text-xs md:text-sm">
              Cap🧢
            </a>
            <a href="#" className="nav-foot-links text-xs md:text-sm">
              Cap🧢
            </a>
          </nav>

          {/* Right-aligned social icons */}
          <div className="lg:flex-1 w-full lg:w-auto flex justify-center lg:justify-end gap-5">
            <a href="#" aria-label="Twitter">
              <FaXTwitter className="text-white/40 hover:text-white transition text-xl" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-white/40 hover:text-white transition text-xl" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="text-white/40 hover:text-white transition text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};