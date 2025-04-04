import React, { useState } from 'react';
import { cvData } from './data/cv';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import { motion } from 'framer-motion';
import LinksAndProjects from "./components/LinksAndProjects.tsx";

function App() {
  const [language, setLanguage] = useState('en');
  const data = cvData[language];
    const linksAndProjects = [
        {
            title: 'Upwork – Google Maps Places API - search review, place name and category',
            description: 'Create code that I can run to create CSV export of results from Google Map Places searches of 1) key words the Place name, 2) keywords in the Reviews and/or 3) Place tags/categories, bounded to a certain area. For instance, I want to search only [Category:rivers OR Placename includes word \'river\'] AND [one or more reviews also contains e.g. keyword = swimming]. Ideally this would display results filtered on a Google Maps, but could possibly by just a Python code which returns a CSV (which I can then import back into maps) or *ideally* can select map area and the input words, and ideally returns the filtered results on the same map .',
            link: 'https://www.upwork.com/jobs/~0110ee9afb613a2edb',
            rating:5
        },
        {
            title: 'Upwork - Scrapping all dentists from CQC website',
            description: 'Extract all dentists and all their underlying information from this site in the UK. https://www.192.com/businesses/search/ All Data needs to be delivered in excel Website URL, name, contact details, financial details, full address, opening hours, number of dentists nearby.',
            link: 'https://www.upwork.com/jobs/~0119135cd157d1bc8d',
            rating:5
        },
        {
            title: 'Upwork - Python script for website scrapping',
            description: 'You will be responsible for developing a script that will siphon off all the content of a page. Then, based on this page, you will need to determine the total number of pages there are, and iterate on the remaining pages. The data obtained will be stored in a csv file.The site has no defence mechanism like Captchas/Cloudflare and does not require Javascript to be run. The use of Selenium is not required for this exercise.',
            link: 'https://www.upwork.com/jobs/~012cc4190dc0eb8b7a',
            rating:5
        }
    ];
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
          <LinksAndProjects items={linksAndProjects} />
      </motion.main>
    </div>
  );
}

export default App;