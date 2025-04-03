import React from 'react';
import { Skill } from '../data/cv';
import { motion } from 'framer-motion';

interface SkillsProps {
  skills: Skill[];
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

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="py-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-midnight-blue-900">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="font-semibold text-lg mb-3 text-midnight-blue-900">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;