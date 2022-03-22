import {Row, Col, Button, Image, Container, Card} from 'react-bootstrap';
import Bed from '../images/Bed.png';
import Bathtub from '../images/Bathtub.png';
import NoAnimals from '../images/No Animals.png';
import Car from '../images/Car.png';

import CardHeader from 'react-bootstrap/esm/CardHeader';
import './ShowAHouse.css';

const ShowAHouse = () => {
    return (
      <div className="App">
        <Container>
          <Row>
            <Image fluid src="./images/apartment1.jpg" alt="" />
          </Row>
          <Row>
            <Col>
              <Image src={Bed} alt="bed" />Photos <Image src={Bed} alt="bed" />Videos <Image src={Bed} alt="bed" />Map
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col sm={8} className='text-start'>
              <Button as={Col}>Apply Online</Button>{' '}
              <Button as={Col} variant="secondary">Book Viewing</Button>
              <h2>City Centre - 2 Bedroom apartment</h2>
              <p>1106/207 Federal street , City Centre (Auckland City) , 1010 </p>
              <p>Apartment</p>
              <h2>$600 per week</h2>
              <Image src={Bed} alt="bed" /> 2 Bedrooms
              <Image src={Bathtub} alt="bathtub" fluid /> 1 Bathroom
              <Image src={Car} alt="car" fluid /> 1 Carpark
              <Image src={NoAnimals} alt="noanimals" /> Pet friendly
              <h3>Available</h3>
              <p>Available from Friday 18th March 2022</p>
              <p>Located in the Heart of the City, Federal Street is the gateway to SKYCITY. It has also transformed into an inner-city hot spot for food lovers with some of the best eateries in Auckland. Located within a few minutes walking distance from the universities, public transport facilities, Queen St shopping and famous Auckland City Waterfront and Viaduct Basin.</p>
              <h3>Property details</h3>
              <p>2 double bedrooms with good quality mattresses<br/>
                1 spacious bathroom<br/>
                Rent Includes cold water<br/>
                Power, phone & internet not included<br/>
              </p>
              <p>Move-in cost: 4 weeks bond and 1-week rent.</p>
            </Col>
            <Col sm={4}>
              <Card>
                <CardHeader className='agentId'></CardHeader>
                <Row>
                  <Col sm={4}>
                    <Image src="./images/apartment1.jpg" height={70} alt="bed" /> 
                  </Col>
                  <Col sm={6} className='text-start'>
                    Ashley Zhang<br/>
                    <Image src={Bed} alt="bed" /> 021 136 6789<br/>
                    <Image src={Bed} alt="bed" /> ashlee.zhang@akproperty.net
                  </Col>
                </Row>
              </Card>
              <p>Share this listing: Mail Print Facebook Twitter</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='text-start'>
                <Button>Apply Online</Button>{' '}
                <Button variant="secondary">Book Viewing</Button>
              </div>
              <div className='text-end'>
                <Button href="/SearchAHouse">Return to Search <Image src={Bed} alt="bed" /></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default ShowAHouse;