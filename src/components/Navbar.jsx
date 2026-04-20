import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"   // ← add this
import { DarkColors, lightColors, NAV_ITEMS } from "../data/PortfolioData";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();              

  const colors = darkMode ? DarkColors : lightColors;
  const MotionLink = motion(Link);

  const getActiveSection = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    return path.replace("/", "");            
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">

          {/* Logo */}
          <MotionLink
            to="/"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center space-x-2 justify-between"
          >
            <img src="/asr-logo.svg" className="w-6 h-6"/>
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Ankit<span className="text-orange-500"></span>
            </span>
          </MotionLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium transition-colors duration-300 ${
                    getActiveSection() === item.label.toLowerCase() 
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                  }`}
                >
                  {item.label}
                </motion.span>

                {getActiveSection() === item.label.toLowerCase() && (  
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors cursor-pointer`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode
                ? <Sun className="w-5 h-5 text-yellow-300" />
                : <Moon className="w-5 h-5 text-gray-700" />
              }
            </motion.button>

            {/* Hire Me Button */}
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
            >
              Hire Me
            </MotionLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-4 px-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } cursor-pointer`}
            >
              {isMenuOpen
                ? <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`} />
                : <Menu className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`} />
              }
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${
              darkMode ? "bg-gray-900/95" : "bg-white/95"
            } backdrop-blur-lg rounded-xl shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="px-4 py-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  to={item.path}
                  key={item.label}
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`py-3 px-4 rounded-lg text-center ${
                      getActiveSection() === item.label.toLowerCase()  
                        ? darkMode ? "bg-gray-800" : "bg-orange-50"
                        : ""
                    }`}
                  >
                    <span className={`font-medium ${
                      getActiveSection() === item.label.toLowerCase()
                        ? colors.textActive
                        : colors.textSecondary
                    }`}>
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              ))}

              <MotionLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md`}
              >
                Hire Me
              </MotionLink>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;