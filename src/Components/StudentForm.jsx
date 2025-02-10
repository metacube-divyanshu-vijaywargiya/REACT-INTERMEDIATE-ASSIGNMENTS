import React, { useState } from 'react';
import './StudentForm.css'
import Dialog from './Dialog';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    email: '',
    major: '',
    bio: '',
    gender: '',
  });

  const [showDialog, setShowDialog] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDialog(true); 
    console.log(student);
  };

  const handleCloseDialog = () => {
    setShowDialog(false); //closing the dialog 
  };

  return (
    <>
    <form onSubmit={handleSubmit} className='form_main'>
      <h2 className='form_heading'>Student Information Form</h2>

      <div className='label_fields_div'>
        <label>Name:</label>
        <input
          className='input_field'
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />
      </div>

      <div className='label_fields_div'>
        <label>Age:</label>
        <input
          className='input_field'
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          required
        />
      </div>

      <div className='label_fields_div'>
        <label>Email:</label>
        <input
          className='input_field'
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
      </div>

      <div className='label_fields_div'>
        <label>Major:</label>
        <select
          className='input_field_select'
          id="major"
          name="major"
          onChange={handleChange}
          required
        >
          <option value="" disabled selected>Select your major</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
        </select>
      </div>

      <div className='label_fields_div'>
        <label>Bio:</label>
        <textarea
          className='input_field_textarea'
          id="bio"
          name="bio"
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div className='label_fields_div'>
        <label>Gender:</label>
        <div className='gender_inner_div'>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />
            Other
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>

{/* This dialog i made to show the submitted information */}
    <Dialog 
        isOpen={showDialog} 
        onClose={handleCloseDialog} 
        studentData={student} 
    />
    </>



  );
};

export default StudentForm;
