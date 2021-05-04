import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { getStudents } from '../helpers/data/StudentData';

function App() {
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getStudents().then((response) => setStudents(response));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => { // authed is a taco
      if (authed) {
        const userInfoObject = { // example of stuff that you might need from Google data
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObject);
      } else if (user || user === null) { // null shows when app is loading
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Navbar user={user}/>
        <Routes
          user={user}
          students={students}
          setStudents={setStudents}
        />
      </Router>
    </>
  );
}

export default App;
