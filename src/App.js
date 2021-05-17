import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title:'What is React?',
        content: 'React is front end javascript framework',
    },
    {
        title:'Why use React?',
        content: 'React is favurite',
    },
    {
        title:'How do you use React?',
        content: 'Use to create components',
    },
];

export default ()=>{
    return (
        <div>
            <Accordion items = {items}/>
        </div>
    );
};