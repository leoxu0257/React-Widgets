import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
        label:'The color red',
        value: 'red'
    },
    {
        label:'The color green',
        value: 'green'
    },
    {
        label:'The color yellow',
        value: 'yellow'
    }
];

export default ()=>{
    const [selected, setSelected] = useState(options[0]);
    return (
        <div> 
            {/* <Search /> */}
            <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected}
                options={options}/>
        </div>
    );
};