import React from 'react';
import './Dialog.css'; 
import ReactDOM from 'react-dom'


const Dialog = ({ onClose, studentData }) => {
  return ReactDOM.createPortal(
    <div className="dialog-overlay">
      <div className="dialog">
        <div className='dialog_header'>
          <h2>Submitted Information</h2>
          <i onClick={onClose} className='close_icon' >
            <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
            </svg>
          </i>
        </div>
        <div><strong className='dialog_info_heading'>Name:</strong> {studentData.name}</div>
        <div><strong className='dialog_info_heading'>Age:</strong> {studentData.age}</div>
        <div><strong className='dialog_info_heading'>Email:</strong> {studentData.email}</div>
        <div><strong className='dialog_info_heading'>Major:</strong> {studentData.major}</div>
        <div><strong className='dialog_info_heading'>Bio:</strong> {studentData.bio}</div>
        <div><strong className='dialog_info_heading'>Gender:</strong> {studentData.gender}</div>
      </div>
    </div>,
    document.getElementById('root')
  );
};

export default Dialog;
