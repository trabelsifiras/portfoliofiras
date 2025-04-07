import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';

interface LinkProject {
    title: string;
    description: string;
    link: string;
    rating: number; // Support half values like 4.5
}

interface LinksAndProjectsProps {
    items: LinkProject[];
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Star = ({ filled }: { filled: boolean }) => (
    <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={filled ? "#facc15" : "none"}
        stroke="#facc15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300"
        whileHover={{ scale: 1.2 }}
    >
        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" />
    </motion.svg>
);

const HalfStar = () => (
    <motion.svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        className="transition-all duration-300"
        whileHover={{ scale: 1.2 }}
    >
        <defs>
            <linearGradient id="halfGradient">
                <stop offset="50%" stopColor="#facc15" />
                <stop offset="50%" stopColor="transparent" />
            </linearGradient>
        </defs>
        <polygon
            points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"
            fill="url(#halfGradient)"
            stroke="#facc15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);

const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push(<Star key={i} filled={true} />);
        } else if (i === fullStars && hasHalfStar) {
            stars.push(<HalfStar key={i} />);
        } else {
            stars.push(<Star key={i} filled={false} />);
        }
    }

    return <div className="flex space-x-1 mt-2">{stars}</div>;
};

const LinksAndProjects: React.FC<LinksAndProjectsProps> = ({ items }) => {
    return (
        <motion.section
            id="links-and-projects"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="py-6"
        >
            <div className="bg-gray-900 p-4 rounded-lg mb-6">
                <TypewriterText text="Loading links and external projects..." className="text-xl font-bold" />
            </div>
            <div className="space-y-6">
                {items.map((itemData, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-400 transform transition-all duration-300 hover:shadow-xl"
                    >
                        <TypewriterText text={itemData.title} delay={index * 500} className="text-lg font-semibold text-blue-300" />
                        <p className="text-blue-200 mt-2">{itemData.description}</p>
                        {renderStars(itemData.rating)}
                        <a
                            href={itemData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4 text-blue-400 underline hover:text-blue-200"
                        >
                            Visit Project
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default LinksAndProjects;
