import { Row } from "react-bootstrap";

function Header(props) {
    return ( 
        <Row className="text-center">
            <h1>{props.title}</h1>
        </Row>
     );
}

export default Header;
