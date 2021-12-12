import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const ModalLogin = (props) => {
 
    const handleClose = () => props.onHide();
    const handleSubmit = (name) => props.onRegister(name);

    const [name, setName] = useState("");
    
    return (
        <Modal show={props.show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register To Play</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group >
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" onChange={e => setName(e.target.value) } value={name} placeholder="name input"/>           
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" type="submit" onClick={() => handleSubmit(name)}>
                Register
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalLogin;