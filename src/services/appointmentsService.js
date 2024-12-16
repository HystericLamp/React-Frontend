export const fetchAppointments = async () => {
    try {
        // Make Request
        const response = await fetch('http://localhost:8000/rest/appointments/');
        
        // Access the 'appointments' array within the JSON object
        const result = await response.json();
        return result.appointments || [];
    } catch (error) {
        throw new Error(error.message);
    }
};