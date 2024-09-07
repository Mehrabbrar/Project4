import React, { useState, useEffect } from 'react';

const Home = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        // Retrieve the username from local storage
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, []);

    return (
        <div className='home'>
            <div className='welcome'>
                {name ? <h1>Cars Hub {name}!</h1> : <h1>Cars Hub!</h1>}
            </div>
            <div className='home-section'>
                
            </div>
        </div>
    );
};

export default Home;