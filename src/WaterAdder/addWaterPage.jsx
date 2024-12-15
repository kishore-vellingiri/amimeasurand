import React, { useState } from 'react';
import axios from 'axios';

const AddWaterPage = () => {
    // State to store form values
    const [userId, setUserId] = useState('');
    const [waterUsage, setWaterUsage] = useState('');
    const [waterSpeed, setWaterSpeed] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Data to be sent in the POST request
        const data = {
            user_id: userId,
            water_usage: waterUsage,
            water_speed: waterSpeed
        };

        try {
            const response = await axios.post('https://vwvvop9sv4.execute-api.ap-south-1.amazonaws.com/dev/addwaterusage', data);
            console.log('Success:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h1>Add Water Usage</h1>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="user_id">User ID:</label>
                    <input type="text" id="user_id" value={userId} onChange={(e) => setUserId(e.target.value)} required/>
                    <label htmlFor="water_usage">Water Usage (liters):</label>
                    <input type="text" id="water_usage" value={waterUsage} onChange={(e) => setWaterUsage(e.target.value)} required/>
                    <label htmlFor="water_speed">Water Speed:</label>
                    <input type="text" id="water_speed" value={waterSpeed} onChange={(e) => setWaterSpeed(e.target.value)} required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddWaterPage;
