import React from 'react'
import { Button, Modal } from 'react-bootstrap';


const InformationPost = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">information Post</Modal.Title>
        </Modal.Header>

        <Modal.Body >
          <h4>{props.p.name}</h4>
          <p>{props.p.price}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onHide}>Kapat</Button>
        </Modal.Footer>
        
      </Modal>
    </>
  )
}

export default InformationPost;