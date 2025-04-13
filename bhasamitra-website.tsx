import React, { useState } from 'react';
import { 
  Globe2, 
  User, 
  LogIn, 
  UserPlus, 
  Search, 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Github, 
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Languages,
  MessageSquare
} from 'lucide-react';

export default function BhasamitraWebsite() {
  const [inputText, setInputText] = useState('');
  const [selectedDialect, setSelectedDialect] = useState('');
  const [outputText, setOutputText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  
  const dialects = [
    { id: 'awadhi', name: 'Awadhi (अवधी)' },
    { id: 'bagheli', name: 'Bagheli (बघेली)' },
    { id: 'bhojpuri', name: 'Bhojpuri (भोजपुरी)' },
    { id: 'haryanvi', name: 'Haryanvi (हरियाणवी)' },
    { id: 'bundeli', name: 'Bundeli (बुंदेली)' },
    { id: 'chattisgarhi', name: 'Chattisgarhi (छत्तीसगढ़ी)' }
  ];

  const handleTextChange = (e) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setInputText(text);
      setCharacterCount(text.length);
    }
  };

  const handleDialectSelect = (dialectId) => {
    setSelectedDialect(dialectId);
    setShowDropdown(false);
  };

  const handleConvert = () => {
    // In a real app, this would call an API to do the conversion
    // Here we'll just simulate a conversion for display purposes
    const sample = `This is your text translated to ${selectedDialect}. In a real application, an AI model would handle this translation.`;
    setOutputText(sample);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Globe2 className="h-8 w-8" />
              <span className="text-2xl font-bold">Bhasamitra</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-indigo-200 font-medium">Home</a>
              <a href="#about" className="hover:text-indigo-200 font-medium">About Us</a>
              <a href="#" className="hover:text-indigo-200 font-medium">Contact</a>
              <a href="#" className="hover:text-indigo-200 font-medium">Help</a>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-1 px-4 py-2 rounded hover:bg-indigo-700 transition">
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-1 px-4 py-2 bg-white text-indigo-600 rounded shadow hover:bg-gray-100 transition">
                <UserPlus className="h-5 w-5" />
                <span>Sign Up</span>
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mt-4 pt-2 pb-4 border-t border-indigo-400 md:hidden">
              <a href="#" className="block py-2 hover:bg-indigo-700 px-2 rounded">Home</a>
              <a href="#about" className="block py-2 hover:bg-indigo-700 px-2 rounded">About Us</a>
              <a href="#" className="block py-2 hover:bg-indigo-700 px-2 rounded">Contact</a>
              <a href="#" className="block py-2 hover:bg-indigo-700 px-2 rounded">Help</a>
              <div className="mt-4 flex flex-col space-y-2">
                <button className="flex items-center justify-center space-x-1 py-2 rounded bg-indigo-500 hover:bg-indigo-700 transition">
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </button>
                <button className="flex items-center justify-center space-x-1 py-2 bg-white text-indigo-600 rounded shadow hover:bg-gray-100 transition">
                  <UserPlus className="h-5 w-5" />
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Enhanced Hero Section with Animation */}
      <section className="relative bg-gradient-to-br from-indigo-800 via-purple-700 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-purple-400 blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles size={18} className="text-yellow-300 mr-2" />
                <span className="text-sm font-medium">AI-Powered Language Technology</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                <span className="block">Bhasamitra</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  हिंदी डायलेक्ट कन्वर्टर
                </span>
              </h1>
              
              <p className="text-xl max-w-xl mx-auto md:mx-0 mb-8 text-indigo-100">
                Transform Standard Hindi into regional dialects like Awadhi, Bhojpuri, and more. Preserve linguistic diversity with our cutting-edge AI technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center space-x-2 justify-center">
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition flex items-center space-x-2 justify-center">
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-3">
                  <Languages size={24} />
                </div>
                
                <h3 className="text-xl font-medium mb-4">Try a Quick Translation</h3>
                <div className="space-y-4">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <p className="text-white/80 text-sm mb-1">Hindi (Standard)</p>
                    <p>"मैं अपने देश से प्यार करता हूँ।"</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="text-white/60" />
                  </div>
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-white/80 text-sm mb-1">Bhojpuri</p>
                    <p>"हम अपना देस से प्यार करत बानी।"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Converter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Convert Your Text</h2>
            
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <div className="mb-4">
                <label htmlFor="input-text" className="block text-gray-700 font-medium mb-2">Type your Hindi text here (Maximum 500 characters)</label>
                <textarea
                  id="input-text"
                  className="w-full border border-gray-300 rounded-lg p-3 h-40 focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                  placeholder="यहां अपना हिंदी पाठ लिखें..."
                  value={inputText}
                  onChange={handleTextChange}
                ></textarea>
                <p className="text-right text-sm text-gray-500 mt-1">{characterCount}/500 characters</p>
              </div>
              
              <div className="mb-4 relative">
                <label className="block text-gray-700 font-medium mb-2">Select Dialect</label>
                <div className="relative">
                  <button 
                    onClick={() => setShowDropdown(!showDropdown)} 
                    className="w-full text-left border border-gray-300 rounded-lg p-3 bg-white hover:bg-gray-50 flex justify-between items-center"
                  >
                    <span>{selectedDialect ? dialects.find(d => d.id === selectedDialect).name : "Choose a dialect"}</span>
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </button>
                  
                  {showDropdown && (
                    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {dialects.map(dialect => (
                        <button
                          key={dialect.id}
                          onClick={() => handleDialectSelect(dialect.id)}
                          className="w-full text-left p-3 hover:bg-indigo-50 block"
                        >
                          {dialect.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <button 
                onClick={handleConvert}
                disabled={!inputText || !selectedDialect}
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center space-x-2
                  ${(!inputText || !selectedDialect) 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
              >
                <Search className="h-5 w-5" />
                <span>Convert</span>
              </button>
            </div>
            
            {outputText && (
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                  Converted to {selectedDialect && dialects.find(d => d.id === selectedDialect).name}
                </h3>
                <p className="text-gray-800 whitespace-pre-line">{outputText}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">About Us</h2>
            
            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-3">Bhasamitra - Preserving India's Linguistic Heritage</h3>
                <p className="text-gray-700 mb-4">
                  Bhasamitra is an AI-powered platform that facilitates the conversion of standard Hindi into various regional dialects. Our mission is to preserve and promote India's rich linguistic diversity in the digital era.
                </p>
                <p className="text-gray-700 mb-4">
                  Our AI model has been trained to understand the grammar, vocabulary, and sentence structure of regional dialects such as Awadhi, Bagheli, Bhojpuri, Haryanvi, Bundeli, and Chattisgarhi. It not only translates words but also maintains cultural and regional nuances.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To preserve the rich heritage of Indian languages and dialects in the digital world and connect them with modern technology. We aim to enable every Indian to communicate fluently in their mother tongue and maintain their cultural identity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-3">Our Services</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Translation of text from standard Hindi to various regional dialects</li>
                  <li>Adaptation of educational materials into local dialects</li>
                  <li>Data collection for language preservation and research</li>
                  <li>Translation of government documents and information into local dialects</li>
                  <li>Creation of digital content in local dialects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">6 Dialects</h3>
              <p className="text-gray-700">Support for Awadhi, Bagheli, Bhojpuri, Haryanvi, Bundeli, and Chattisgarhi dialects</p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Regional Nuances</h3>
              <p className="text-gray-700">Not just words, but accurate translation of cultural and regional expressions</p>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Easy to Use</h3>
              <p className="text-gray-700">Simple interface that anyone can use without technical knowledge</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe2 className="h-8 w-8" />
                <span className="text-2xl font-bold">Bhasamitra</span>
              </div>
              <p className="text-gray-400 mb-4">
                भाषा के संरक्षण के लिए समर्पित - Dedicated to the preservation of language diversity
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Text Translation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Educational Materials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Research</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Integration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Custom Solutions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className="text-gray-400">New Delhi, India</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-1" />
                  <span className="text-gray-400">contact@bhasamitra.ai</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Bhasamitra - सभी अधिकार सुरक्षित (All Rights Reserved)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
