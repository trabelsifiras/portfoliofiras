import React from 'react';
import { Education as EducationType } from '../data/cv';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

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
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <TypewriterText
              text="Retrieving education data..."
              className="text-xl font-bold"
          />
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
              <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900 p-4 rounded-lg shadow-md border border-green-400 transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <TypewriterText
                        text={edu.institution}
                        delay={index * 500}
                        className="font-semibold"
                    />
                    <TypewriterText
                        text={edu.degree}
                        delay={(index * 500) + 200}
                        className="text-green-300"
                    />
                  </div>
                  <span className="text-green-400 bg-green-900 px-3 py-1 rounded-full text-sm border border-green-400">
                {edu.period}
              </span>
                </div>
              </motion.div>
          ))}
        </div>
      </motion.section>
  );
};

export default Education;