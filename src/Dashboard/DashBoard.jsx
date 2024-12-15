import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Dashboard/Dashboard.css'
const DashboardPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Get userId from URL params using useParams
    const { id } = useParams(); 

    useEffect(() => {
        // Make the Axios request when the component is mounted
        const fetchData = async () => {
            try {
                // Use backticks for the template literal
                const response = await axios.get(`https://vwvvop9sv4.execute-api.ap-south-1.amazonaws.com/dev/fetchwaterusage?user_id=${id}`);
                console.log(response.data);  // For debugging purposes
                console.log(id);
                setData(response.data);
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]); // Trigger the effect when userId changes

    const formatMonth = (entry_month) => {
        // Parse the month and return abbreviated format (e.g. "FEB", "JAN")
        const month = new Date(entry_month).toLocaleString('default', { month: 'short' }).toUpperCase();
        return month;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Water Usage Data</h2>
            {data && data.length > 0 ? (
                <table border="1" cellPadding="10">
                    <thead>
                        <tr>
                            <th>Custom User ID</th>
                            <th>Total Water Usage</th>
                            <th>Water Speed Average</th>
                            <th>Total Bill</th>
                            <th>Payment Status</th>
                            <th>Entry Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.custom_user_id}</td>
                                <td>{item.total_water_usage}</td>
                                <td>{item.water_speed_average}</td>
                                <td>{item.total_bill}</td>
                                <td>{item.payment_status}</td>
                                <td>{formatMonth(item.entry_month)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No data available.</div>
            )}
        </div>
    );
};

export default DashboardPage;
