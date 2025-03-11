import React, { useEffect, useRef, useState } from 'react';
import './StudentForm.css'
import Dialog from './Dialog';
import useTheme from '../Contexts/ThemeContext';
import { useDispatch } from 'react-redux';
import PortalCounter from './PortalCounter';
import { addStudent } from '../redux/Features/studentSlice';

const StudentForm = () => {
  const {themeMode} = useTheme();
  const [count, setCount] = useState(0)
  const [student, setStudent] = useState({
    name: '',
    age: '',
    email: '',
    major: '',
    bio: '',
    gender: '',
  });
  const [showDialog, setShowDialog] = useState(false);
  const dispatch = useDispatch();

  throw new Error("testing error"); // throwing error manually to test error boundaries


  //to focus initially on name input field when page just reloads
  useEffect(()=>{    
    nameRef.current.focus();
  },[])

  //Creating ref for each input field
  const nameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const majorRef = useRef();
  const bioRef = useRef();
  const genderRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // for name input field 
    if(!student.name){
      nameRef.current.style.border = '1.5px solid red';
    }else{
      nameRef.current.style.border = ''
    }

    //for age input field 
    if(!student.age){
      ageRef.current.style.border = '1.5px solid red';
    }else{
      ageRef.current.style.border = ''
    }

    //for email input field 
    const emailRegex = /[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    if(!student|| !emailRegex.test(student.email)){
      emailRef.current.style.border = '1.5px solid red';
    }else{
      emailRef.current.style.border = ''
    }

    //for major input field 
    if(!student.major){
      majorRef.current.style.border = '1.5px solid red';
    }else{
      majorRef.current.style.border = ''
    }

    //for bio input field 
    if(!student.bio){
      bioRef.current.style.border = '1.5px solid red';
    }else{
      bioRef.current.style.border = ''
    }

    //if everything is entered by the user then show the dialog with submitted information
    if(student.name && student.age && student.bio && student.email && student.gender && student.major){
      // const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
      // storedStudents.push(student);
      // localStorage.setItem('students', JSON.stringify(storedStudents));     
      console.log(student);
      
      dispatch(addStudent({name : student.name, age :student.age, bio: student.bio, email:student.email, gender : student.gender, major : student.major})) 
      setShowDialog(true); 
    }
  };

  const handleCloseDialog = () => {
    setShowDialog(false); //closing the dialog 
  };

  return (
    <>
    <div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <PortalCounter count={count}/>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
    <form className={themeMode === 'light' ? 'form_main' : 'form_main_dark' }>
      <h2 className={themeMode === 'light' ? 'form_heading':'form_heading_dark'}>Student Information Form</h2>

      <div className='label_fields_div'>
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Name:</label>
        <input
          className='input_field'
          type="text"
          ref={nameRef}
          id="name"
          name="name"
          onChange={handleChange}
        />
      </div>

      <div className='label_fields_div'>
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Age:</label>
        <input
          className='input_field'
          type="number"
          id="age"
          ref={ageRef}
          name="age"
          onChange={handleChange}
        />
      </div>

      <div className='label_fields_div'>
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Email:</label>
        <input
          className='input_field'
          type="text"
          ref={emailRef}
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div className='label_fields_div'>
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Major:</label>
        <select
          className='input_field_select'
          id="major"
          name="major"
          ref={majorRef}
          onChange={handleChange}
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
          ref={bioRef}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div className='label_fields_div'>
        <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>Gender:</label>
        <div className='gender_inner_div'>
          <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>
            <input
              type="radio"
              name="gender"
              ref={genderRef}
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
              ref={genderRef}
            />
            Female
          </label>
          <label className={themeMode === 'light' ? 'label_text_light':'label_text_dark'}>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
              ref={genderRef}
            />
            Other
          </label>
        </div>
      </div>

      <button onClick={handleSubmit} className='submit_button'>Submit</button>
    </form>

{/* This dialog i made to show the submitted information */}
    { showDialog && <Dialog 
        onClose={handleCloseDialog} 
        studentData={student} 
    />}
    </>



  );
};

export default StudentForm;
