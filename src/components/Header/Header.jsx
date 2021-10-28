import './header.scss';

import axios from 'axios';

import { useState } from 'react';

const Header = () => {

    const [name, setName] = useState('Random Person');
    const [money, setMoney] = useState('');

    const getName = () => {
        axios.get('https://randomuser.me/api')
            .then(response => {
                const data = response.data;
                const userData = data.results[0];
                setName(`${userData.name.first} ${userData.name.last}`);
            })
    }

    const getMoney = () => {
        setMoney(Math.floor(Math.random() * 10000000) + 1);
    }

    return (
        <header className="header">
            <h1>Random Net Worth Generator</h1>
            <button onClick={getName}>Show person</button>
            <button onClick={getMoney}>Show wealth</button>
            <p>Full Name: <span className="name">{name}</span></p>
            <p>Net Worth: {new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(money)}</p>
        </header>
    );
};

export default Header;