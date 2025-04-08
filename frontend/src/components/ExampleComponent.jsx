import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const ExampleComponent = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Example of calling the backend API
        const fetchData = async () => {
            try {
                const response = await api.get('/');
                setMessage(response.data.message);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Message from Backend:</h2>
            <p>{message}</p>
        </div>
    );
};

export default ExampleComponent;
