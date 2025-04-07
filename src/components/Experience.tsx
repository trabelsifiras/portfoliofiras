import React from 'react';
import { Experience as ExperienceType } from '../data/cv';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

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
          id="experience"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="py-6"
      >
        <div className="bg-gray-900 p-4 rounded-lg mb-6">
          <TypewriterText
              text="Accessing experience records..."
              className="text-xl font-bold"
          />
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
              <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.01 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-md border border-green-400 transform transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <TypewriterText
                        text={exp.company}
                        delay={index * 500}
                        className="text-xl font-semibold"
                    />
                    <TypewriterText
                        text={exp.position}
                        delay={(index * 500) + 200}
                        className="text-green-300"
                    />
                  </div>
                  <span className="text-green-400 bg-green-900 px-3 py-1 rounded-full text-sm border border-green-400">
                {exp.period}
              </span>
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
                      <TypewriterText
                          text={`Project: ${project.name}`}
                          delay={(index * 500) + (projectIndex * 300)}
                          className="font-semibold text-lg mb-2"
                      />
                      <ul className="space-y-2 mb-4 list-none">
                        {project.details.map((detail, detailIndex) => (
                            <motion.li
                                key={detailIndex}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * detailIndex }}
                                className="text-green-300 pl-4 border-l border-green-400"
                            >
                              <TypewriterText
                                  text={detail}
                                  delay={(index * 500) + (projectIndex * 300) + (detailIndex * 200)}
                              />
                            </motion.li>
                        ))}
                      </ul>
                      <motion.div
                          whileHover={{ scale: 1.01 }}
                          className="bg-green-900/20 p-3 rounded border border-green-400"
                      >
                        <TypewriterText
                            text={`Technical Environment: ${project.technicalEnvironment}`}
                            delay={(index * 500) + (projectIndex * 300) + 400}
                            className="text-sm"
                        />
                      </motion.div>
                    </motion.div>
                ))}
              </motion.div>
          ))}
        </div>
      </motion.section>
  );
};

export default Experience;