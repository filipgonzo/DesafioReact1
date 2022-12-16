import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards = (props) => {
  return (
    <div>
        <Card style={{ width: '18rem',height: '30rem' }}>
      <Card.Img variant="top" src={props.img} style={{ height: '18rem'}} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <Button variant="success">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  );
};

export default Cards;