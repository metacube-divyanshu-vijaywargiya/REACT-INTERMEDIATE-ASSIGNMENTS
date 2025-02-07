import React, { useState } from 'react';
import './StudentForm.css'

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    email: '',
    major: '',
    bio: '',
    gender: '',
  });

//   const [showDialog]
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    //here we will render the dialog on submit 
    e.preventDefault();
    console.log(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Information Form</h2>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="major">Major:</label>
        <select
          id="major"
          name="major"
          onChange={handleChange}
          required
        >
          <option value="">Select your major</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Biology">Biology</option>
          <option value="Chemistry">Chemistry</option>
        </select>
      </div>

      <div>
        <label htmlFor="bio">Bio:</label>
        <textarea
          id="bio"
          name="bio"
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div>
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
  );
};

export default StudentForm;
