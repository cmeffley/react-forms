import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Students from '../views/Students';
import AddStudent from '../views/AddStudent';
import SingleStudent from '../views/SingleStudent';
import NotFound from '../views/NotFound';

export default function Routes({ students, setStudents }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact path='/students'
          component={() => <Students students={students} setStudents={setStudents} />}
        />
        <Route
          path='/students/:firebaseKey'
          component={SingleStudent}
        />
        <Route
          path='/add-students'
          component={() => <AddStudent setStudents={setStudents} />}
        />
        <Route path='*' component={NotFound} />
        {/* // Not found component HAS TO BE AT THE BOTTOM, the star means any path */}
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired
};
