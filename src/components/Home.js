import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";
import { Container, Card, Button, ButtonGroup} from "react-bootstrap";

export default function Home() {
    const { state, dispatch } = useContext(AuthContext);
    let navigate = useNavigate();

    if (!state.isLoggedIn) {
      return <Navigate to="/login" />;
    }
  
    const { avatar_url, name, login } = state.user
  
    const handleLogout = () => {
      dispatch({
        type: "LOGOUT"
      });
    } 

    const handleNewGame = () => {
      navigate("/newgame");
    } 

    const handleJoinGame = () => {
      navigate("/game");
    } 
  
    return (
      <Wrapper>
        <Container>
          <Card className="text-center" >
            <Card.Body>
              <Card.Img className="rounded-circle" src={avatar_url} alt="Avatar" /> 
              <Card.Text>Welcome {name || login}</Card.Text>
              <ButtonGroup vertical>
                <Button key={"join"} className="m-1" variant="primary" onClick={()=> handleJoinGame()}>Join Game</Button>
                <Button key={"new-game"} className="m-1" variant="primary" onClick={()=> handleNewGame()}>New Game</Button>
                <Button key={"logout"} className="m-1" variant="primary" onClick={()=> handleLogout()}>Logout</Button>
              </ButtonGroup>
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
        width: 150px;
      }
    }
  } 
}
`;
