import React from 'react';
import { Skill } from '../data/cv';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

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
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <TypewriterText
              text="Loading skills database..."
              className="text-xl font-bold"
          />
        </div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
              <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.01 }}
                  className="bg-gray-900 p-4 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-xl border border-green-400"
              >
                <TypewriterText
                    text={`${skill.category}:`}
                    delay={index * 500}
                    className="font-semibold text-lg mb-3"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {skill.items.map((item, itemIndex) => (
                      <motion.span
                          key={itemIndex}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-green-900 px-3 py-1 rounded-full text-sm text-green-400 cursor-default border border-green-400"
                      >
                        {item}
                      </motion.span>
                  ))}
                </div>
              </motion.div>
          ))}
        </div>
      </motion.section>
  );
};

export default Skills;