import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tags from './Tags'

function MyCard(props) {

  const { nombre, imagenUrl, texto, tipo, color } = props;

  return (
    <Col>
      <Card className="text-center" style={{ width: '18rem' }}>
      <Card.Img src={ imagenUrl } />
      <Card.Body>
          <Card.Title>{ nombre }</Card.Title>
          <Card.Text>
          { texto }
          </Card.Text>
          <Tags color={color} tipo={tipo} />
      </Card.Body>
      </Card>
    </Col>
  );
}

export default MyCard;