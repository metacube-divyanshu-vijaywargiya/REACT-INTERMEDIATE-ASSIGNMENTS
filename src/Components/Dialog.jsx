import React from 'react';
import './Dialog.css'; 

const Dialog = ({ isOpen, onClose, studentData }) => {
  if (!isOpen) return null; 

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <div className='dialog_header'>
          <h2>Submitted Information</h2>
          <i onClick={onClose} >
            <svg className='close_icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
            </svg>
          </i>
        </div>
        <p><strong>Name:</strong> {studentData.name}</p>
        <p><strong>Age:</strong> {studentData.age}</p>
        <p><strong>Email:</strong> {studentData.email}</p>
        <p><strong>Major:</strong> {studentData.major}</p>
        <p><strong>Bio:</strong> {studentData.bio}</p>
        <p><strong>Gender:</strong> {studentData.gender}</p>
      </div>
    </div>
  );
};

export default Dialog;
