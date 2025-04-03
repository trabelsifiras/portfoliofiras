import React from 'react';
import { Education as EducationType } from '../data/cv';
import { motion } from 'framer-motion';

interface EducationProps {
  education: EducationType[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="py-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-midnight-blue-900">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-midnight-blue-900"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-midnight-blue-900">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree}</p>
              </div>
              <span className="text-gray-500">{edu.period}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;