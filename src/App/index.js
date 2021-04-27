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
      <StudentForm
        formTitle='Form Title'
        setStudents={setStudents}
      />
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

export default App;
