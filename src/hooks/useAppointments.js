import { useState, useEffect } from 'react';
import { fetchAppointments } from '../services/appointmentsService';

export const useAppointments = () => {
    // State to store fetched data
    const [appointments, setAppointments] = useState([]);

    // State to handle loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data when the component mounts
    useEffect(() => {
    const getAppointments = async () => {
        try {
            // Making Request
            const result = await fetchAppointments();
            setAppointments(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    getAppointments();
    }, []); // Empty dependency array means this runs only once

    return { appointments };
};