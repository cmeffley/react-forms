import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addStudent } from './helpers/data/StudentData';

const StudentForm = ({ formTitle }) => {
  const [student, setStudent] = useState({
    name: '',
    teacher: '',
    grade: 0,
  });

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
  };

  return (
    <>
      <div className="student-form">
        <form
          id="addStudentForm"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2>{formTitle}</h2>
        <div>
          <label>Name: </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={student.name}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label>Teacher: </label>
          <input
            name="teacher"
            type="text"
            placeholder="Teacher"
            value={student.teacher}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label>Grade: </label>
          <input
            name="grade"
            type="number"
            placeholder="Grade"
            value={student.grade}
            onChange={handleInputChange}
          ></input>
        </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

StudentForm.propTypes = {
  formTitle: PropTypes.string.isRequired // key = prop name
};

export default StudentForm;
