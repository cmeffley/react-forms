import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const StudentCard = ({
  name,
  teacher,
  grade,
  handleClick
}) => (
    <Card body>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText>{grade}</CardText>
          <CardText>{teacher}</CardText>
          {handleClick ? <Button onClick={handleClick}>Print Student</Button> : '' }
        </Card>
);

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  teacher: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  handleClick: PropTypes.func
};

export default StudentCard;
