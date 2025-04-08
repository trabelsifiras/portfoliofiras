import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion,AnimatePresence } from 'framer-motion';
import {Code2,Menu, Briefcase, GraduationCap, LucideCurrency,X} from 'lucide-react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { name: 'Skills', icon: <Code2 size={16} />, to: 'skills' },
        { name: 'Experience', icon: <Briefcase size={16} />, to: 'experience' },
        { name: 'Education', icon: <GraduationCap size={16} />, to: 'education' },
        { name: 'Freelance Projects', icon: <LucideCurrency size={16} />, to: 'links-and-projects' }
    ];

    const handleNavClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-4 right-4 z-50"
        >
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-900/95 text-green-400 hover:text-green-300 transition-colors border border-green-400"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex bg-gray-900/95 backdrop-blur-sm rounded-full border border-green-400 p-2">
                {navItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="flex items-center gap-2 text-green-400 hover:text-green-300 cursor-pointer transition-colors px-4 py-2 rounded-full hover:bg-gray-800"
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-12 right-0 w-48 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-green-400 shadow-lg"
                    >
                        <div className="flex flex-col space-y-1 p-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={handleNavClick}
                                    className="flex items-center gap-2 text-green-400 hover:text-green-300 cursor-pointer transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;