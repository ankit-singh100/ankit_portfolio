import { useState } from "react"
import { DarkColors, lightColors, NAV_ITEMS } from "../data/PortfolioData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const MotionLink = motion(Link);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const colors = darkMode ? DarkColors : lightColors;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed x-50 mt-4">
      <motion.nav
      initial={{y: -100}}
      animate={{y: 0}}
      transition={{ duration: 0.5}}
      className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
        {/* Logo */}
        <MotionLink
        className="flex items-center space-x-2"
        to="/"
        onClick={() => handleNavClick("home")}
        whileHover={{ scale: 1.05}}>
          <span className={`text-xl font-bold ${colors.textPrimary}`}>Portoflio
            <span className="text-orange-500"></span>
          </span>
        </MotionLink>

        {/* Navigation Items */}
        <div className="hidden lg:flex items-center space-x-6">
          {NAV_ITEMS.map((item, index) => (
            <Link key={index} to={item.path} onClick={() => handleNavClick(item.label)}
            className="relative">
              <motion.span
              className={`font-medium transition-colors duration-300 ${activeSection === item.label.toLowerCase() ? colors.textActive : `${colors.textSecondary} hover:text-orange-500`}`}whileHover={{ scale: 1.05}}
              whileTap={{ scale: 0.95}}>
              {item.label}
              </motion.span>

              {activeSection === item.label.toLowerCase() && (
                <motion.div
                layoutId="navbar-indicator"
                className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indicator}`}></motion.div>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          {/* Dark Mode Toggle */}
          <motion.button
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? "bg-gray-700" : "bg-gray-200"}transition-colors cursor-pointer`}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-300"/>
            ): 
            (<Moon className="w-5 h-5 text-gray-700"/>)}
          </motion.button>

          {/* Button */}
          <MotionLink
          to="/contact"
          onClick={() => handleNavClick("contact")}
          whileHover={{ scale: 1.05}}
          whileTap={{ scale: 0.95}}
          className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow cursor-pointer`}>
            Hire Me
          </MotionLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-4 px-2">
            <motion.button
            whileTap={{ scale: 0.9}}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"} cursor-pointer`}>
              {isMenuOpen ? (
                <X className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}/>
              ): 
              (
                <Menu className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}/>
              )}

            </motion.button>
        </div>
        </div>

        {isMenuOpen && (
          <motion.div
          initial={{opacity: 0, height: 0}}
          animate={{opacity: 1, height: "auto"}}
          transition={{ duration: 0.3}}
          className={`absolute top-full left-0 right-0 mt-2 lg:hidden ${darkMode ? "bg-gray-900/95" : "bg-white/95"}backdrop-blur-lg rounded-xl shadow-lg border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
            <div className="px-4 py-3 space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link to={item.path} key={item.label}
                onClick={() => handleNavClick(item.label)}
                className="block">
                  <motion.div
                  whileHover={{ x: 5}}
                  className={`py-3 px-4 rounded-lg text-center ${activeSection === item.label.toLowerCase() ? darkMode ? "bg-gray-800" : "bg-orange-50": ""}`}>
                    <span className={`font-medium ${activeSection === item.label.toLowerCase() ? colors.textActive : colors.textSecondary}`}>
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              ))}

              <MotionLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              whileTap={{ scale: 0.95}}
              className={`block py-3 px-4 text-center font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md`}>
                Hire Me
              </MotionLink>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  )
}

export default Navbar
