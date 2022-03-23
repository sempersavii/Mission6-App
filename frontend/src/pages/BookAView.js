import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Bed from '../images/Bed.png';
import Bathtub from '../images/Bathtub.png';
import NoAnimals from '../images/No Animals.png';
import Car from '../images/Car.png';
import First from '../images/1st.png';
import Circled2 from '../images/Circled 2.png';
import Circled3 from '../images/Circled 3 C.png';
import Circled4 from '../images/Circled 4 C.png';
import Forward from '../images/Forward 6.png';
import apartment1 from '../images/apartment1.jpg';
import './BookAView.css';

function MyVerticallyCenteredModal(props) {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [bookingdate, setBookingdate] = useState('')
  const [bookingtime, setBookingtime] = useState('')
  const [suitable, setSuitable] = useState('') 

  const navigate = useNavigate();
  
  const reset = () => {
    setFirstname("");
    setLastname("");
    setPhone("")
    setEmail("");
    setBookingdate("");
    setBookingtime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    createUser();    
    props.onHide();
    navigate('/confirm');
  };

  let savedUserId = "";

  const createUser = async () => {
    const baseURL = "http://localhost:5000/api/users";
    // const baseURL = "/api/users";
    const newUser = {
      firstname,
      lastname,
      phone,
      email,
      bookingdate,
      bookingtime,
      suitable
    };    
    console.log(newUser);
    try {
      const response = await axios.post(baseURL, newUser);
      const saveduser = response.data;
      console.log(saveduser); 
      console.log(saveduser._id); 
      savedUserId = saveduser._id;
      console.log(savedUserId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>        
      </Modal.Header>
      <Modal.Body>
        <Card>
           <Card.Header className='text-center bg-danger text-white'>
           <p> You are booking a viewing for: </p>
           <p> 652 Mt Road, Mt Eden </p>
           </Card.Header>
           <Card.Body>
           <Row >
             <Col>
            <Image fluid src={apartment1} alt="house pic" />
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
             <Col >
             <Card body className="bg-danger text-white">Instructions to view a property</Card>  
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
           <Card.Body>           
           <Form onSubmit={handleSubmit}>
              <Col>
                <Card body className="bg-danger text-white">1. Enter your details</Card>  
              </Col>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstname">
                  <Form.Label>First name</Form.Label>
                  <Form.Control 
                    type="text" 
                    onChange={(e) => setFirstname(e.target.value)} 
                    value={firstname}
                    placeholder="Enter first name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLastname">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control 
                    type="text" 
                    onChange={(e) => setLastname(e.target.value)} 
                    value={lastname}
                    placeholder="Enter last name" />
                </Form.Group>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    type="text" 
                    onChange={(e) => setPhone(e.target.value)} 
                    value={phone}
                    placeholder="Enter phone" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                  type="email" 
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}  />
                </Form.Group>
                </Row>
                <Col>
                <Card body className="bg-danger text-white">2. Viewing times</Card>  
                </Col>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridBookingdate">
                  <Form.Label>Booking date</Form.Label>
                  <Form.Control 
                    type="date" 
                    placeholder="xxx"
                    onChange={(e) => setBookingdate(e.target.value)}
                    value={bookingdate}  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridBookingtime">
                  <Form.Label>Booking time</Form.Label>
                  <Form.Control 
                    type="time" 
                    placeholder="xxx"
                    onChange={(e) => setBookingtime(e.target.value)} 
                    value={bookingtime}
                   />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" id="formGridCheckbox1">
                <Form.Check 
                  type="checkbox" 
                  label="Viewing times not suitable?" />
              </Form.Group>            
            <Col>
                <Card body className="bg-danger text-white">COVID-19 Policy</Card> 
                <Container className='my-3'>
                <Card>
                  <Card.Header className="bg-secondary text-white">COVID-19 Policy for viewing</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque doloribus aperiam in error laboriosam similique consequatur totam mollitia obcaecati.
                    </Card.Text>
                  </Card.Body>
                  <Form.Group className="mb-3" id="formGridCheckbox2">
                <Form.Check type="checkbox" label="Agree with the COVID-19 Policy" />
              </Form.Group>              
                </Card> 
                </Container>
            </Col>
            {/* <Button className="me-2 bg-success text-white" onClick={props.onHide}>Cancel</Button> */}
            <Button className="bg-success text-center text-white" 
              onClick={handleSubmit}
              savedUserId={savedUserId}
            >Submit
            </Button>
            </Form>
           </Card.Body>
         </Card>
      </Modal.Body>
      <Modal.Footer >        
      </Modal.Footer>
    </Modal>
  );
}

const BookAView = () => {
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Book a View
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
  
export default BookAView;

