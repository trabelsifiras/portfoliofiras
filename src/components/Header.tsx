import React from 'react';
import { Globe, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { PersonalInfo } from '../data/cv';
import { motion } from 'framer-motion';
import image from '../data/1743765262296.jpg';
interface HeaderProps {
  personalInfo: PersonalInfo;
  language: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ personalInfo, language, onLanguageChange }) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-midnight-blue-900 text-white py-12 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src={image}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
        />
        
        <div className="flex-1">
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl font-bold mb-2"
            >
              {personalInfo.firstName} {personalInfo.lastName}
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 mb-6"
            >
              {personalInfo.position}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{personalInfo.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>{personalInfo.mobile}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Github size={20} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <Linkedin size={20} />
                </a>
                <div className="flex items-center gap-2 ml-4">
                  <Globe size={16} />
                  <select
                    value={language}
                    onChange={(e) => onLanguageChange(e.target.value)}
                    className="bg-transparent border border-white rounded px-2 py-1"
                  >
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                  </select>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;