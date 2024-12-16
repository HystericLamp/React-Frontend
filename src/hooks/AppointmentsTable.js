import { useEffect, useState } from 'react';

function AppointmentsTable() {
    // State to store fetched data
    const [appointments, setAppointments] = useState([]);

    // State to handle loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch data when the component mounts
    useEffect(() => {
      // Replace with your API URL
      const fetchAppointments = async () => {
        try {
          const response = await fetch("http://localhost:8000/rest/appointments/");
          if (!response.ok) {
            throw new Error("Failed to fetch any data");
          }

          // Access the 'appointments' array within the JSON object
          const result = await response.json();
          setAppointments(result.appointments || []);
        } catch (err) {
          setError(err.message); // Handle errors
        } finally {
          setLoading(false); // Loading is done
        }
      };
  
      fetchAppointments();
    }, []); // Empty dependency array means this runs only once
  
    // Render loading, error, or the list of appointments
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (appointments.length === 0) return <p>No appointments available.</p>;
  
    return (
      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <th className="border border-gray-300 px-4 py-2">Patient's Name</th>
          <th className="border border-gray-300 px-4 py-2">Appointment Time</th>
          <th className="border border-gray-300 px-4 py-2">Status</th>
        </thead>

        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={appointment.appointment_id}>
              <td className="border border-gray-300 px-4 py-2">{appointment.firstname} {appointment.lastname}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.appointment_date} @ {appointment.appointment_time}</td>
              <td className="border border-gray-300 px-4 py-2">{appointment.status}</td>
            </tr>
        ))}
        </tbody>
      </table>
    );
  }
  
  export default AppointmentsTable;