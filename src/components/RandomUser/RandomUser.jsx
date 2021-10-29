import './randomuser.scss';

import axios from 'axios';

import { useState } from 'react';

const RandomUser = () => {

    const [name, setName] = useState('');
    const [money, setMoney] = useState('');

    const getName = () => {
        axios.get('https://randomuser.me/api')
            .then(response => {
                console.log(response.data);
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
            <p className="header__intro">Press the <span>'Show person'</span> button to retreive the name of a random person from the randomuser.me API and the <span>'Show wealth'</span> button to generate a random number.</p>
            <button onClick={getName}>Show person</button>
            <button onClick={getMoney}>Show wealth</button>
            <p>Full Name: <span>{name}</span></p>
            <p>Net Worth: <span>{new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(money)}</span></p>
        </header>
    );
};

export default RandomUser;