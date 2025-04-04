import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
    text: string;
    delay?: number;
    className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, delay = 0, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 50);

            return () => clearInterval(interval);
        }, delay);

        const cursorInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => {
            clearTimeout(timeout);
            clearInterval(cursorInterval);
        };
    }, [text, delay]);

    return (
        <div className={`font-mono ${className}`}>
            <span className="text-green-400">&gt; </span>
            <span className="text-green-400">{displayText}</span>
            {cursorVisible && <span className="text-green-400">▋</span>}
        </div>
    );
};

export default TypewriterText;