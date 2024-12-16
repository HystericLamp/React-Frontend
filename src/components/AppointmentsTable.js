import React from 'react';
import { useAppointments } from '../hooks/useAppointments';

function AppointmentsTable() {
  const { appointments } = useAppointments();

  return (
    <div>
      {/* Table Displaying Appointments */}
      <table class="content-center" className="border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 px-4 py-2">Patient's Name</th>
            <th className="border border-slate-300 px-4 py-2">Date</th>
            <th className="border border-slate-300 px-4 py-2">Time</th>
            <th className="border border-slate-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td className="border border-slate-300 px-4 py-2">{appointment.firstname} {appointment.lastname}</td>
              <td className="border border-slate-300 px-4 py-2">{appointment.appointment_date}</td>
              <td className="border border-slate-300 px-4 py-2">{appointment.appointment_time}</td>
              <td className="border border-slate-300 px-4 py-2">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;