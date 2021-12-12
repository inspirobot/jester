import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
 
import ModalLogin from "./ModalLogin";
 
 const Navigation = (props) => {
 const [modalShow, setModalShow] = useState(false);
 
 return (
   <Navbar bg="primary" variant="dark" expand="md">
     <Navbar.Brand href="#home">Jester</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
         <Nav.Link
           variant="transparent"
           style={{ width: "50px" }}
           onClick={() => setModalShow(true)}
          >
           Login
         </Nav.Link>
         <ModalLogin show={modalShow} onHide={() => setModalShow(false)} onRegister={(name) => {setModalShow(false); props.registerUser(name)}} />
         <Nav.Link href="#link">Link</Nav.Link>
         <NavDropdown title="Sample Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">
             Another action
           </NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">
             Separated link
           </NavDropdown.Item>
         </NavDropdown>
       </Nav>
     </Navbar.Collapse>
   </Navbar>
 );
};
export default Navigation;