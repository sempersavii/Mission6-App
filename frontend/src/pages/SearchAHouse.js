import { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const SearchAHouse = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
      const fetchHouses = async () => {
          const {data} = await axios.get('http://localhost:5000/api/houses');
          setHouses(data);
      };
      fetchHouses();
  }, []);

    return (
      <div >
        <h2 className="my-3">Hello from Search</h2>
        <Container >  
          <Row>
            <Col>
                <Card >
                  {houses && houses.map(house => (
                    <ListGroup variant="flush" key={house._id}>
                      <ListGroup.Item>House Name: {house.name}</ListGroup.Item>
                      <ListGroup.Item>House Location: {house.location}</ListGroup.Item>
                      <ListGroup.Item>House Description: {house.description}</ListGroup.Item>
                  </ListGroup>
                  ))}
                </Card>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
  
  export default SearchAHouse;