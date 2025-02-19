import React from 'react';
import './StudentsTable.css';
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import { removeStudent } from '../redux/Features/studentSlice';
import useTheme from '../Contexts/ThemeContext';

const StudentsTable = () => {
  const students = useSelector(state=> state.students)
  const dispatch = useDispatch();
  const {themeMode} = useTheme()
  
  return (
    <div className="table-container">
      <h2 className={themeMode == 'light' ? 'text_color_dark' : 'text_color_light'}>Students List</h2>
      {students.length>0 ? (
        <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Major</th>
            <th>Bio</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr key={index} className={themeMode == 'light' ? 'text_color_dark' : 'text_color_light'}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.major}</td>
              <td>{student.bio}</td>
              <td>{student.gender}</td>
              <td>
                <button onClick={(e)=>dispatch(removeStudent(student.id))}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ) : (
        <p className={themeMode == 'light' ? 'text_color_dark no_students' : 'text_color_light no_students'}>No students found.</p>
      )}
    </div>
  );
};

export default StudentsTable;
