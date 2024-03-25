import Badge from 'react-bootstrap/Badge';

const Tags = (color, texto) => {
  return (
    <>
      <Badge bg={color}>{texto}</Badge>
    </>

  )
}

export default Tags