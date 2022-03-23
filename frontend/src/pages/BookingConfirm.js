import {useState, useEffect} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './BookAView.css';

function MyVerticallyCenteredModal(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const id = '623ae4e0225d8795a77a5d73'
      try {
        const {data} = await axios.get('http://localhost:5000/api/users/' + id);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>        
      </Modal.Header>
      <Modal.Body >
        
        <Card>
           <Card.Header className='fw-bold bg-white text-center'>
           <p> Your viewing has been confirmed! </p>
           </Card.Header>
           <Card.Body className='bg-light items-align-center' >
           {/* <Row className='text-center mt-4 mb-5' > */}
           <Row className='text-center' >

             <Col>
             <p>Date: {user.bookingdate}</p>
             <p>Time: {user.bookingtime}</p>
             <p>Address: 652 Mt Road, Mt Eden</p>
             <br />
             <p>You will receive a confirmation email and text message one hour before the viewing time</p>             
             </Col>
             <br />
                
           </Row>            
           </Card.Body>           
         </Card>
         <div  className='d-flex justify-content-center'>
           <Button style={{backgroundColor: "#76D449"}} size="lg" variant="success" >Accept</Button>
         </div>
        
      </Modal.Body>      
    </Modal>
  );
}

const BookingConfirm = (props) => {
  const [modalShow, setModalShow] = useState(true);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Conform Booking
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
  
export default BookingConfirm;

