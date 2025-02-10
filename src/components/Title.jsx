import { useEffect, useState } from 'react';
const TITLES = [
    'a software engineer',
    'a food lover',
    'an enthusiastic learner',
];

function Title() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    useEffect(
        () => {
            const interval = setInterval(() => {
                setTitleIndex((titleIndex + 1) % TITLES.length);
                setFadeIn(true);
                setTimeout(() => setFadeIn(false), 2000);
            }, 4000);
            setTimeout(() => setFadeIn(false), 2000);
            return () => clearInterval(interval);
        }
    , [titleIndex]);
    return <p className={`title ${fadeIn? 'title-fade-in': 'title-fade-out'}`}>I am {TITLES[titleIndex]}</p>
}

export default Title;