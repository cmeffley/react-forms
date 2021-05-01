import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleStudent } from '../helpers/data/StudentData';

export default function SingleStudent() {
  const [student, setStudent] = useState({});
  const { firebaseKey } = useParams(); // firebaseKey is from Route.js path that is in the url

  useEffect(() => {
    getSingleStudent(firebaseKey).then(setStudent);
    // .then((response) => setStudent(response)) <- same thing as line above
  }, []);

  return (
    <div>
      <h1>Single Student</h1>
      <h2>{student.name}</h2>
      <h4>{student.teacher}</h4>
      <h4>{student.grade}</h4>
    </div>
  );
}
