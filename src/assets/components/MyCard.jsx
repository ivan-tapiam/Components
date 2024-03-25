import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = ({image, text, description, tags}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {image} />
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Adoptar</Button>
      </Card.Body>
    </Card>
   
    </div>
  )
}

export default MyCard

