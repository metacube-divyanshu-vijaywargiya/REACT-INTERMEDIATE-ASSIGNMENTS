import React from 'react';
import './StudentsTable.css';
import useFetchStudents from '../CustomHooks/useFetchStudents';

const StudentsTable = () => {
  const {data} = useFetchStudents();

  return (
    <div className="table-container">
      <h2>Students List</h2>
      {data && data.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Major</th>
              <th>Bio</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>{student.major}</td>
                <td>{student.bio}</td>
                <td>{student.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentsTable;
