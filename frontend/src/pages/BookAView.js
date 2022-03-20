import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Bed from '../images/Bed.png';
import Bathtub from '../images/Bathtub.png';
import NoAnimals from '../images/No Animals.png';
import Car from '../images/Car.png';
import First from '../images/1st.png';
import Circled2 from '../images/Circled 2.png';
import Circled3 from '../images/Circled 3 C.png';
import Circled4 from '../images/Circled 4 C.png';
import Forward from '../images/Forward 6.png';

import './BookAView.css';

const BookAView = () => {
    return (
      <div className='bookaview'>
        <Card>
          <Card.Header>
          <p> You are booking a viewing for: </p>
          <p> 652 Mt Road, Mt Eden </p>
          </Card.Header>
          <Card.Body>
          <Row >
            <Col>
            <Image fluid src="http://localhost:3000/images/apartment1.jpg" alt="house pic" />
            </Col>
            <Col>
            <p>Available</p>
            <p>Price</p>
            <Col>
              <Image src={Bed} alt="bed" /> 
              <Image src={Bathtub} alt="bathtub" fluid />
              <Image src={Car} alt="car" fluid />
              <Image src={NoAnimals} alt="noanimals" />
            </Col>
            </Col>
          </Row>            
          </Card.Body>
          <Card.Body>
          <Row > 
          <Col>           
            <Col>
            <Card body>Instructions to view a property</Card>  
            </Col>          
            <Col >
              <Image src={First} alt="num1" />
              <span>Please enter your details</span>
            </Col>
            <Col>
              <Image src={Circled2} alt="num2" fluid />
              <span>Select date and time viewing</span>
            </Col>
            <Col>
              <Image src={Circled3} alt="num3" fluid />
              <span>Read and click agree with our COVID-19</span>
            </Col>
            <Col>
              <Image src={Circled4} alt="num4" />
              <span>Click submit</span>
            </Col>
            <Col>
              <Image src={Forward} alt="num5" />
              <span>You will receive a confirmation email and text message one hour before the viewing time</span>
            </Col>
            </Col>
          </Row>            
          </Card.Body>
        </Card>
        
      </div>
    );
  }
  
export default BookAView;

