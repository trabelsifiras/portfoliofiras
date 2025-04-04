import React, { useState } from 'react';
import { cvData } from './data/cv';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { motion } from 'framer-motion';

function App() {
  const [language, setLanguage] = useState('en');
  const data = cvData[language];

  return (
    <div className="min-h-screen bg-black">
      <Header 
        personalInfo={data.personalInfo}
        language={language}
        onLanguageChange={setLanguage}
      />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto px-4 md:px-8 py-8"
      >
        <Skills skills={data.skills} />
        <Experience experiences={data.experience} />
        <Education education={data.education} />
      </motion.main>
    </div>
  );
}

export default App;