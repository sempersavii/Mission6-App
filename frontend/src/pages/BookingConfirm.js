
import {useState} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

import './BookAView.css';

function MyVerticallyCenteredModal(props) {
  


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
           <Card.Header className='text-center bg-danger text-white'>
           <p> Your viewing has been confirmed </p>
           </Card.Header>
           <Card.Body className='items-align-center'>
           {/* <Row className='text-center mt-4 mb-5' > */}
           <Row className='text-center' >

             <Col>
             <p>Date: user.date</p>
             <p>Time: user.time</p>
             <p>Address: user.address</p>
             <br />
             <p>You will receive a confirmation email and text message one hour before the viewing time</p>             
             </Col>

           </Row>            
           </Card.Body>
         </Card>
         
      </Modal.Body>      
    </Modal>
  );
}

const BookingConfirm = () => {
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

