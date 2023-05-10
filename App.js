import React, { useState, useEffect } from 'react';
import StudentTable from './StudentTable';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/index')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div>

      <caption className="table-title">
      <h1>Student Records</h1>
      </caption>


      <StudentTable students={students} />
    </div>
  );
}

export default App;
