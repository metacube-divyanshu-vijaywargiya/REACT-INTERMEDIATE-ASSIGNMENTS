import React, { useState } from 'react';
import './StudentForm.css'
import Dialog from './Dialog';
import useTheme from '../Contexts/ThemeContext';

const StudentForm = () => {
  const {themeMode} = useTheme();
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
    <form onSubmit={handleSubmit} className={themeMode === 'light' ? 'form_main' : 'form_main_dark' }>
      <h2 className={themeMode === 'light' ? 'form_heading':'form_heading_dark'}>Student Information Form</h2>

      <div className='label_fields_div'>
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Name:</label>
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
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Age:</label>
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
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Email:</label>
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
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Major:</label>
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
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Bio:</label>
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
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Gender:</label>
        <div className='gender_inner_div'>
          <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
          </label>
          <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>
          <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>
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

      <button type="submit" className='submit_button'>Submit</button>
    </form>

{/* This dialog i made to show the submitted information */}
    <Dialog 
        isVisible={showDialog} 
        onClose={handleCloseDialog} 
        studentData={student} 
    />
    </>



  );
};

export default StudentForm;
