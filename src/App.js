import React from "react";
import AppointmentsTable from "./components/AppointmentsTable"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 text-gray-900">
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="mt-4">
              <AppointmentsTable />
            </div>
          </main>
        </div>
    </div>
  );
}

export default App;