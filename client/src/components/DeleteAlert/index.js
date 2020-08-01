import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css';

function DeleteAlert(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {props.btn1}
        </Button>
        <Button variant="primary" onClick={handleClose}>
          {props.btn2}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteAlert;
