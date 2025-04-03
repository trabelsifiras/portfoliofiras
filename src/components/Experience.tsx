import React from 'react';
import { Experience as ExperienceType } from '../data/cv';
import { motion } from 'framer-motion';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="py-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-midnight-blue-900">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-midnight-blue-900"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-midnight-blue-900">{exp.company}</h3>
                <p className="text-gray-600">{exp.position}</p>
              </div>
              <span className="text-gray-500">{exp.period}</span>
            </div>
            
            {exp.projects.map((project, projectIndex) => (
              <motion.div 
                key={projectIndex}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * projectIndex }}
                className="mt-4"
              >
                <h4 className="font-semibold text-lg mb-2 text-midnight-blue-900">{project.name}</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-600">
                    <strong>Technical Environment:</strong> {project.technicalEnvironment}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;