import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PROFILE } from '../data/PortfolioData';
import { DownloadIcon, Mail } from 'lucide-react';
import image from '../assets/image.png';
import hi from '../assets/hi.png';

const HeroSection = ({ darkMode, setActiveSection }) => {

  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: "text-white border-2 border-orange-500 hover:bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10"
  };

  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary: "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20"
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className='relative overflow-hidden min-h-screen flex flex-col'>
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className='body-font z-10'
      >
        <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14'>
          <div className='lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0'>

            {/* Social Icons */}
            <div className='flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full'>
              <a                                          
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className='transform hover:scale-110 transition-transform duration-300'
              >
                <FaGithub size={30} className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? "" : "filter brightness-75"}`} />
              </a>

              <a                                          
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className='transform hover:scale-110 transition-transform duration-300'
              >
                <FaLinkedin size={30} className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? "" : "filter brightness-75"}`} />
              </a>
            </div>

            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Ankit
            </h1>

            <p
              className={`mb-6 sm:mb-8 mt-3 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              I'm an aspiring backend developer from Nepal passionate about building
              scalable and efficient server-side applications. I focus on clean architectures,
              reliable APIs, and continuous growth as a developer. I'm willing to learn new
              technologies and contribute to impactful projects. Let's connect and create
              something amazing together!
            </p>

            {/* Buttons */}
            <div className='w-full pt-4 sm:pt-6'>
              <div
                className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4'
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={PROFILE.resume} download className='w-full sm:w-auto'>
                  <button className='w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 cursor-pointer'>
                    <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2' />
                    Download Resume
                  </button>
                </a>

                <a 
                onClick={() => setActiveSection("contact")}
                href="#contact" className="w-full sm:w-auto">
                  <button className={`w-full sm:w-auto inline-flex items-center justify-center ${theme.buttonSecondary} py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer`}>
                    <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*  Image */}
          <div
            className='lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center'
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className='relative w-4/5 sm:w-3/4 lg:w-full'>
              <div className='relative overflow-hidden'>
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <img
                src={hi}
                alt="Hi icon"
                className='absolute -top-4 sm:top-4 left-6 sm:left-20 w-14 h-14 sm:w-20 sm:h-20 object-contain animate-bounce opacity-90 z-10'
              />
            </div>
          </div>
        </div>

        <div className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000 hidden sm:block`} />
      </section>
    </div>
  );
};

export default HeroSection;