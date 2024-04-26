"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CoffeeDetailPage({ params }) {
    const router = useRouter();
    const handleCoffeePage = () => {
        router.push('/coffee');
    }

    const Card = ({ id, title, description, ingredients, image }) => {
        return (
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{ingredients}</p>
                <img src={image} alt={title} style={{ maxWidth: '10%', height: 'auto' }} />
            </div>
        );
    }

    const [selectedCoffee, ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.sampleapis.com/coffee/hot/${params.id}`);
                const data = await response.json();
                setSelectedCoffee(data);
            } catch (error) {
                console.error("Error fetching coffee data", error);
            }
        };
        fetchData();
    }, [params.id]);

    if (!selectedCoffee) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>CoffeeDetail: {params.id}</div>
            <button onClick={handleCoffeePage}>Back</button>
            <Card
                id={selectedCoffee.id}
                title={selectedCoffee.title}
                description={selectedCoffee.description}
                ingredients={selectedCoffee.ingredients}
                image={selectedCoffee.image}
            />
        </div>
    );
}
