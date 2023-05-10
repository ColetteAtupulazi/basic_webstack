import React, { useState, useEffect } from "react";

function StudentTable(props) {
  const [students, setStudents] = useState(props.students);

  useEffect(() => {
    fetch("http://localhost:3000/index")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Check in Time</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student[0]}>
            <td>{student[0]}</td>
            <td>{student[1]}</td>
            <td>{student[2]}</td>
            <td>{student[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
