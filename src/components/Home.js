import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";
import { Container, Card, Button} from "react-bootstrap";

export default function Home() {
    const { state, dispatch } = useContext(AuthContext);
  
    if (!state.isLoggedIn) {
      return <Navigate to="/login" />;
    }
  
    const { avatar_url, name, login } = state.user
  
    const handleLogout = () => {
      dispatch({
        type: "LOGOUT"
      });
    } 
  
    return (
      <Wrapper>
        <Container>
          <Card className="text-center" >
            <Card.Body>
              <Card.Img class="rounded-circle" src={avatar_url} alt="Avatar" /> 
              <Card.Text>Welcome {name || login}</Card.Text>
              <Button variant="primary" onClick={()=> handleLogout()}>Logout</Button>
            </Card.Body>
          </Card>
        </Container>
      </Wrapper>
    );
  }
  
  const Wrapper = Styled.section`
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial;

  > .card {
    max-width: 50%;
    width: 18rem;  
    > .card-body {
      > img {
        height: 150px;
        width: '150px;
      }
    }
  } 
}
`;
