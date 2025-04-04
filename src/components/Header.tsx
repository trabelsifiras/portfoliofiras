import image from '../data/firofiro.jpg';
import React from 'react';
import { Globe, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';
import { PersonalInfo } from '../data/cv';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

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
          className="bg-gray-900 text-green-400 py-12 px-4 md:px-8 border-b border-green-400"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.img
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              src={image}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-green-400 shadow-lg shadow-green-400/20 hover:scale-105 transition-transform duration-300"
          />

          <div className="flex-1">
            <div className="text-center md:text-left space-y-4">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-green-400">
                <TypewriterText
                    text={`${personalInfo.firstName} ${personalInfo.lastName}`}
                    className="text-4xl font-bold mb-2"
                />
                <TypewriterText
                    text={personalInfo.position}
                    delay={1000}
                    className="text-xl text-green-300"
                />
              </div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start"
              >
                <div className="space-y-2 bg-gray-900/50 p-4 rounded-lg border border-green-400">
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                  >
                    <MapPin size={16} className="text-green-400" />
                    <TypewriterText
                        text={personalInfo.address}
                        delay={1500}
                    />
                  </motion.div>
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                  >
                    <Phone size={16} className="text-green-400" />
                    <TypewriterText
                        text={personalInfo.mobile}
                        delay={2000}
                    />
                  </motion.div>
                  <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                  >
                    <Mail size={16} className="text-green-400" />
                    <TypewriterText
                        text={personalInfo.email}
                        delay={2500}
                    />
                  </motion.div>
                </div>

                <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg border border-green-400">
                  <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <div className="flex items-center gap-2 ml-4">
                    <Globe size={16} className="animate-spin-slow text-green-400" />
                    <select
                        value={language}
                        onChange={(e) => onLanguageChange(e.target.value)}
                        className="bg-gray-900 text-green-400 border border-green-400 rounded px-2 py-1 cursor-pointer hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                      <option value="en" className="bg-gray-900 text-green-400">English</option>
                      <option value="fr" className="bg-gray-900 text-green-400">Français</option>
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