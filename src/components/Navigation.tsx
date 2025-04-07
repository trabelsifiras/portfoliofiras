import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import {Code2, Briefcase, GraduationCap, LucideCurrency} from 'lucide-react';

const Navigation: React.FC = () => {
    const navItems = [
        { name: 'Skills', icon: <Code2 size={16} />, to: 'skills' },
        { name: 'Experience', icon: <Briefcase size={16} />, to: 'experience' },
        { name: 'Education', icon: <GraduationCap size={16} />, to: 'education' },
        { name: 'Freelance Projects', icon: <LucideCurrency size={16} />, to: 'links-and-projects' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-green-400 py-3 px-4 shadow-lg"
        >
            <div className="max-w-5xl mx-auto flex justify-center space-x-8">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 cursor-pointer transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>
        </motion.nav>
    );
};

export default Navigation;