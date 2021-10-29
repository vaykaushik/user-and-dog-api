import './randomdogs.scss';

import { useState } from 'react';

import axios from 'axios';

const SectionTwo = () => {

    const key = 'd29f0d74-cb69-4909-b946-f56334d448c7';

    const [ dog, setDog ] = useState();

    const randomNum = () => {
        return Math.floor(Math.random() * 171) + 1;
    }

    const seeDog = () => {
        axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${key}`)
            .then(response => {
                const dogData = response.data[randomNum()];
                setDog(`The '${dogData.name}' is bred for ${dogData.bred_for} and is known for being ${dogData.temperament}. It has a life span of ${dogData.life_span}.`);
            })
    }

    return (
        <div className="section__two">
            <h1>Random Dog Facts</h1>
            <h1>Press the button below to find out about a random dog.</h1>
            <div>
                <button onClick={seeDog}>Surprise Me!</button>
            </div>
            <p className="section__two__info">{dog}</p>
        </div>
    );
};

export default SectionTwo;