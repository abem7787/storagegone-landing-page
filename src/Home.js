import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import './App.css';
import logo from '../src/img/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { FaBars, FaBoxOpen, FaWarehouse, FaSearch, FaUser, FaLock, FaThermometerHalf, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BulkyTextReveal = ({ text, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{
        duration: 3,
        delay: index * 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight md:leading-none relative z-10 px-2 text-center"
      style={{
        WebkitTextStroke: '2px white',
        color: 'transparent',
        textShadow: '0 0 20px rgba(255,255,255,0.5)',
        mixBlendMode: 'overlay',
        wordBreak: 'break-word'
      }}
    >
      {text}
    </motion.div>
  );
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showGraphics, setShowGraphics] = useState(false);
  const { scrollYProgress } = useScroll();

  const bulkyTexts = [
    "SMART",
    "STORAGE",
    "SOLUTIONS",
    "FOR",
    "MODERN",
    "BUSINESS"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > 200) {
        setShowGraphics(true);
      } else {
        setShowGraphics(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavHidden(true);
        setMenuOpen(false);
      } else if (currentScrollY === 0) {
        setNavHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <main className="bg-gradient-to-b from-blue-50 to-purple-50 min-h-screen flex flex-col font-sans overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed w-full bg-white/90 backdrop-blur-sm text-blue-900 py-5 px-8 flex justify-between items-center z-50 transition-all duration-500 ${navHidden ? 'hidden' : 'block'} shadow-lg`}
        initial={{ y: 0 }}
        animate={{ y: navHidden ? -100 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Link to="/" className="flex items-center">
            <motion.img 
              src={logo} 
              alt="dfindz logo"
              className="h-12 sm:h-14 md:h-16 w-auto mr-2 transition-transform duration-700 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
            <span className="text-xl font-bold text-blue-900 hidden sm:block">dfindz</span>
          </Link>
        </motion.div>

        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-900 focus:outline-none p-2 flex items-center space-x-2"
            aria-label="Menu"
            whileHover={{ scale: 1.05, transition: { duration: 1 } }}
          >
            <span className="text-base font-medium tracking-wider">MENU</span>
            <FaBars size={20} className="text-blue-700" />
          </motion.button>
        </div>

        <motion.ul
          className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-28 left-0 w-full md:w-auto bg-white/95 md:bg-transparent px-8 py-6 md:p-0 space-y-6 md:space-y-0 md:space-x-10`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {["Home", "Features", "Pricing", "Locations", "Contact", "Login"].map((item) => (
            <motion.li
              key={item}
              className="w-full md:w-auto"
              whileHover={{
                y: -2,
                transition: { type: 'spring', stiffness: 100, damping: 10 }
              }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium tracking-wider hover:text-pink-600 transition-colors duration-700"
              >
                {item.toUpperCase()}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      <div className="flex-grow pt-32 md:pt-40 relative z-10">
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 pt-0 mb-0 relative">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-blue-900 tracking-tight leading-tight text-center"
          >
            <span className="font-medium text-pink-600 whitespace-nowrap">
              dfindz
            </span>
            <span className="whitespace-nowrap text-blue-900">.com</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl mt-8 text-blue-700 font-light tracking-wider max-w-2xl"
          >
            Smart storage solutions for businesses of all sizes
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all">
              Get Started
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all">
              Book a Demo
            </button>
          </motion.div>
        </section>

        {/* Bulky Text Section */}
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-4 md:py-8 mt-0 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="w-full px-4 mx-auto text-center space-y-2 xs:space-y-4 sm:space-y-6 md:space-y-8 relative z-10">
            {bulkyTexts.map((text, index) => (
              <BulkyTextReveal key={index} text={text} index={index} />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 bg-white">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-center px-4 text-blue-900"
          >
            Modern Storage Solutions
          </motion.h2>
          <motion.p
            className="text-lg md:text-2xl max-w-3xl text-center text-blue-700 px-4 mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Our smart storage facilities combine security, technology, and convenience to give you complete peace of mind.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {[
              {
                icon: <FaLock className="text-4xl text-pink-600" />,
                title: "Advanced Security",
                description: "24/7 monitoring, biometric access, and motion sensors keep your items safe."
              },
              {
                icon: <FaThermometerHalf className="text-4xl text-blue-600" />,
                title: "Climate Control",
                description: "Maintain perfect conditions for sensitive items with our smart climate systems."
              },
              {
                icon: <FaChartLine className="text-4xl text-purple-600" />,
                title: "Inventory Tracking",
                description: "Real-time tracking of your stored items with our digital management system."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="bg-gradient-to-b from-white to-blue-50 p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-blue-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-blue-700 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Storage Types Section */}
        <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-purple-50">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-900"
          >
            Our Storage Solutions
          </motion.h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {/* Warehouse Storage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-2xl border border-blue-100 w-full max-w-md mx-auto"
              >
                <div className="relative h-48 bg-blue-50">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Warehouse Image</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20">
                    <FaWarehouse className="text-white text-6xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Warehouse Storage</h3>
                  <p className="text-blue-700 mb-4">Perfect for large inventory and bulk items</p>
                  <ul className="space-y-3 text-blue-800 mb-6">
                    <li className="flex items-center">
                      <FaBoxOpen className="mr-3 text-pink-500" /> 100-10,000 sq. ft. units
                    </li>
                    <li className="flex items-center">
                      <FaBoxOpen className="mr-3 text-pink-500" /> 24/7 access
                    </li>
                    <li className="flex items-center">
                      <FaBoxOpen className="mr-3 text-pink-500" /> Forklift available
                    </li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 text-sm">Starting at</p>
                      <p className="text-blue-900 font-bold text-xl">$0.45/sq ft</p>
                    </div>
                    <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                      Reserve Now
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* How It Works */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-2xl border border-blue-100 w-full max-w-md mx-auto"
              >
                <div className="relative h-48 bg-purple-50">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">How It Works Image</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-purple-900/20">
                    <FaSearch className="text-white text-6xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">How It Works</h3>
                  <ol className="space-y-4 text-blue-800 mb-8">
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      Select your storage size and location
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      Reserve online in minutes
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      Get instant access to your secure unit
                    </li>
                    <li className="flex items-start">
                      <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      Manage everything through our mobile app
                    </li>
                  </ol>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-colors flex items-center justify-center">
                    <span className="mr-2">Get Started</span>
                  </button>
                </div>
              </motion.div>

              {/* Personal Storage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-2xl border border-blue-100 w-full max-w-md mx-auto"
              >
                <div className="relative h-48 bg-pink-50">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Personal Storage Image</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-pink-900/20">
                    <FaUser className="text-white text-6xl" />
                  </div>
                </div>
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Personal Storage</h3>
                  <p className="text-blue-700 mb-8">
                    Small units perfect for personal items, documents, and seasonal storage.
                  </p>
                  
                  <div className="mt-auto space-y-6">
                    <button className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-bold transition-colors">
                      Reserve Unit
                    </button>
                    
                    <div className="border-t border-blue-100 pt-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Unit Sizes</h4>
                      <ul className="space-y-3 text-blue-800">
                        <li className="flex items-center">
                          <FaBoxOpen className="mr-3 text-pink-500" /> 5x5 (25 sq. ft.)
                        </li>
                        <li className="flex items-center">
                          <FaBoxOpen className="mr-3 text-pink-500" /> 5x10 (50 sq. ft.)
                        </li>
                        <li className="flex items-center">
                          <FaBoxOpen className="mr-3 text-pink-500" /> 10x10 (100 sq. ft.)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-4xl md:text-6xl font-extrabold mb-10 px-4"
          >
            By The Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "1.2M+", label: "Square Feet" },
              { number: "24/7", label: "Access" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "50+", label: "Locations" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="p-6"
              >
                <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-32 text-center px-6">
          <motion.h2
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="text-5xl md:text-7xl font-extrabold text-pink-600 mb-12 px-4"
          >
            Ready to Store Smarter?
          </motion.h2>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-4xl mx-auto text-blue-700 text-lg md:text-2xl px-4 mb-12"
          >
            Whether you need short-term storage or a long-term solution, we've got you covered with flexible options and premium security.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all">
              Get a Free Quote
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all">
              Call Us Now
            </button>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-100 py-10 px-6 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <p className="text-xl font-bold mb-4 text-white">dfindz.com</p>
            <p className="text-sm">Smart storage solutions for modern businesses and individuals.</p>
          </div>
          
          <div>
            <p className="font-bold text-white mb-4">Quick Links</p>
            <ul className="space-y-2">
              {["Home", "Features", "Pricing", "Locations"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm hover:text-pink-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <p className="font-bold text-white mb-4">Contact Us</p>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@dfindz.com</li>
              <li>Phone: (818) 655-8715</li>
              <li>123 Storage Way, San Francisco, CA</li>
            </ul>
          </div>
          
          <div>
            <p className="font-bold text-white mb-4">Follow Us</p>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8">
          <p className="text-xs">© {new Date().getFullYear()} dfindz.com — All rights reserved</p>
        </div>
      </footer>
    </main>
  );
}