import { useState } from 'react';
const TITLES = [
    'a software engineer',
    'a food lover',
    'an enthusiastic learner',
];

function Title() {
    const [titleIndex, setTitleIndex] = useState(0);
    setInterval(() => {
        setTitleIndex(() => (titleIndex + 1) % TITLES.length);
    }, 4000);
    return <p className='title'>{TITLES[titleIndex]}</p>
}

export default Title;