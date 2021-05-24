import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Accordion';

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
            <Search />
        </div>
    );
};