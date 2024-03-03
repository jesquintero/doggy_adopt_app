import Badge from 'react-bootstrap/Badge';

function Tags(props) {
    const { color, tipo } = props
  return (
      <Badge bg={ color }>
        { tipo }
      </Badge>
  );
}

export default Tags;