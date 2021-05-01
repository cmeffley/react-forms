import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addStudent, updateStudent } from '../helpers/data/StudentData';

const StudentForm = ({
  formTitle,
  setStudents,
  name,
  teacher,
  grade,
  firebaseKey
}) => {
  const [student, setStudent] = useState({
    name: name || '',
    teacher: teacher || '',
    grade: grade || 0,
    firebaseKey: firebaseKey || null
  });
  const history = useHistory();

  const handleInputChange = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'grade' ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.firebaseKey) {
      updateStudent(student).then((studentArray) => setStudents(studentArray));
    } else {
      addStudent(student).then((studentArray) => setStudents(studentArray));
      history.push('/students'); // show card page after adding student

      // clear inputs
      setStudent({
        name: '',
        teacher: '',
        grade: 0,
        firebaseKey: null
      });
    }
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
  formTitle: PropTypes.string.isRequired, // key = prop name
  setStudents: PropTypes.func.isRequired,
  name: PropTypes.string,
  teacher: PropTypes.string,
  grade: PropTypes.number,
  firebaseKey: PropTypes.string
};

export default StudentForm;
