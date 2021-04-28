import React from 'react';
import PropTypes from 'prop-types';
import StudentCard from '../components/StudentCard';
import '../App/App.scss';

function Students({ students, setStudents }) {
  return (
    <div className='App'>
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          firebaseKey={studentInfo.firebaseKey}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          setStudents={setStudents}
        />
      ))}
    </div>
  );
}

Students.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};

export default Students;
