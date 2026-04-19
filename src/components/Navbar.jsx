import React, { useState } from "react";
import { NAV_ITEMS, PROFILE } from "../data/PortfolioData";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FiGithub, FiInstagram, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = PROFILE.resume;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Resume download started");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-violet-400 font-bold text-lg flex gap-2">
        <img src="/asr-logo.svg" className="w-5 h-5"/>
          ASR
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-300">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-violet-400 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="hidden md:flex items-center gap-4 text-gray-300">

          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>

          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin />
          </a>

          {/* Resume */}
          <button
            onClick={handleResumeDownload}
            className="ml-2 px-3 py-1.5 text-sm bg-violet-600 rounded-md text-white hover:bg-violet-700 transition"
          >
            Resume
          </button>
        </div>

        {/* Mobile Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950/95 border-t border-white/10 px-4 py-4 space-y-3 text-gray-300">

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block hover:text-violet-400"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex gap-4 pt-3">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>

            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
          </div>

          <button
            onClick={() => {
              handleResumeDownload();
              setIsOpen(false);
            }}
            className="w-full mt-3 py-2 bg-violet-600 rounded-md text-white"
          >
            Resume
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;