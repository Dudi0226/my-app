"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CoffeeItem from '../sections/_home/coffee-item';

const Card = ({ id, title, description }) => {
    const router=useRouter();
    const handleCardClick = (   ) => {
        router.push('/coffee/'+id)
    }
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }} onClick={handleCardClick}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function CoffeePage() {
    const router = useRouter();
    const handleHomePage = () => {
        router.push('/home');
    }
    
    const [coffee, setCoffee] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/coffee/hot');
                const data = await response.json();
                setCoffee(data);
            } catch (error) {
                console.error("Error fetching coffee data", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <button onClick={handleHomePage}>Home</button>
            <h1>CoffeePage</h1>
            <br/>
            {/* Render a card for each coffee item */}
            {coffee.map((item, index) => (
                <Card key={index} id={item.id} title={item.title} description={item.ingredients}/>
            ))}
        </div>
    );
}

export default CoffeePage;
