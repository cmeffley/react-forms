import React, { useState, useEffect } from 'react';
import StudentCard from '../components/StudentCard';
import StudentForm from '../StudentForm';
import { getStudents } from '../helpers/data/StudentData';
import './App.scss';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  return (
    <div className='App'>
      <StudentForm formTitle='Form Title'/>
      <hr/>
      {students.map((studentInfo) => (
        <StudentCard
          key={studentInfo.firebaseKey}
          name={studentInfo.name}
          teacher={studentInfo.teacher}
          grade={Number(studentInfo.grade)}
          handleClick={() => console.warn(`${studentInfo.name}'s teacher is ${studentInfo.teacher}.`)}
        />
      ))}
    </div>
  );
}

export default App;
