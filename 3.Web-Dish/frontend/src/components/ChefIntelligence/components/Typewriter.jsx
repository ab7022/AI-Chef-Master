import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, text]);

    return <span className="font-extrabold text-6xl md:text-7xl text-orange-400 text-center mb-8 justify-center">{currentText}</span>;
};

export default Typewriter;