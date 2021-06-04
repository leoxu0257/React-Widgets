import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Header from './components/Header';

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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion  items={items}/>;
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search  />;
    }
}

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />;
    }
}
 

export default ()=>{
    const [selected, setSelected] = useState(options[0]);
    return (
        <div> 
            <Header>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    lable = "select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected }
                />
            </Route>
        </div>
    );
};