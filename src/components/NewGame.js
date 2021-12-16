import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";
import { Container, Form, Row, FormGroup, Col, Button, ButtonGroup} from "react-bootstrap";
import { Suits, Ranks, Options, Scoring } from '../shared/constants';

const lorem_ipsum = "Lorem ipsum|dolor sit|amet consectetur|adipiscing elit|sed do|eiusmod tempor|incididunt ut|labore et|dolore magna|aliqua Ut|enim ad|minim veniam|quis nostrud|exercitation ullamco|laboris nisi|ut aliquip ex|ea commodo|consequat Duis|aute irure dolor|in reprehenderit in|voluptate velit|esse cillum|dolore eu|fugiat nulla pariatur";

export default function NewGame() {
    const { state } = useContext(AuthContext);
  
    if (!state.isLoggedIn) {
      return <Navigate to="/login" />;
    }
    const handleCreateGame = () => {
    } 
    const handleDeleteGame = () => {
    } 
    const handleStartGame = () => {
    } 

    const children_ui_suits = Suits.map((suit, index) => {
      return <Form.Check key={suit.name} id={suit.name} label={suit.symbol} defaultChecked={suit.default}/> 
      });
    const children_ui_card_ranks = Ranks.map((rank, index) => {
      return <Form.Check key={rank.name} id={rank.name} label={rank.symbol} defaultChecked={true}/> 
    });
    const children_ui_options = Options.map((option, index) => {
      return <Form.Switch key={option.name} type="switch" id={option.name} label={option.label} defaultChecked={option.default}/>
    });
    const children_ui_players = lorem_ipsum.split('|').map((player, index) => {
      return <li key={index}><img className="rounded-circle" alt="" src={`http://placekitten.com/${50+index}`}/><span>{player}</span></li>
    });  
  
    const children_ui_score = Scoring.map((score, index) => {      
      return (
        <Form.Group as={Row}>
          <Form.Label column sm={4} >{score.label}</Form.Label>
          <Col sm={2}>
          <Form.Control column sm={3} id={score.name} defaultValue={score.value}/>
          </Col>
        </Form.Group>
      )
      });
  
    return (
        <Wrapper>
          <Container>
              <Form>
                <Row>
                  <FormGroup as={Col} className="formgroup">
                    <Form.Label as="legend" column sm={2}>
                      <h2>Options</h2>
                    </Form.Label>
                    <Form.Group>
                      <Form.Label>Mode:</Form.Label>
                      <Form.Check inline label="Normal" name="game-mode" type="radio" id="game-mode-normal"/>
                      <Form.Check inline label="Training" name="game-mode" type="radio" id="game-mode-training"/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Speed:</Form.Label>
                      <Form.Check inline label="Lightning" name="game-speed" type="radio" id="game-speed-lightning"/>
                      <Form.Check inline label="Fast" name="game-speed" type="radio" id="game-speed-fast"/>
                      <Form.Check inline label="Normal" name="game-speed" type="radio" id="game-speed-normal"/>
                      <Form.Check inline label="Slow" name="game-speed" type="radio" id="game-speed-slow"/>
                    </Form.Group>
                    <Form.Label>Game Length</Form.Label>
                    <Form.Select aria-label="Default select example">
                    <option>Select an option</option>
                    <option value="1">All Rounds</option>
                    <option value="2">Even</option>
                    <option value="3">Odd</option>
                    <option value="5">Fibbonacci</option>
                    <option value="6">5 Rounds</option>
                    <option value="7">7 Rounds</option>
                    <option value="8">Special 6</option>
                    <option value="9">Amigo Tournament</option>
                    <option value="10">Custom</option>
                    </Form.Select>
                  </FormGroup>
                  <FormGroup as={Col} className="formgroup">
                    <Form.Label as="legend" column sm={2}>
                    <h2>Scoring</h2>
                    </Form.Label>
                    {children_ui_score}
                  </FormGroup>
                  <FormGroup as={Col} className="formgroup">
                    <Form.Label as="legend" column sm={2}>
                    <h2>Variations</h2>
                    </Form.Label>
                    {children_ui_options}
                  </FormGroup>
                </Row>
                <Form.Label as="legend">
                    <h1>Deck Options</h1>
                </Form.Label>
                <Row>
                    <FormGroup className="border formgroup" as={Col}>
                      <Form.Label as="legend" column sm={6}>
                        <h2>Power Cards</h2>
                      </Form.Label>
                        <Form.Group as={Row}>
                          <Form.Label column sm={3}>Wizards</Form.Label>
                          <Col sm={2}>
                            <Form.Control id="wizards" defaultValue="4"/>
                          </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                          <Form.Label column sm={3}>Jesters</Form.Label>
                          <Col sm={2}>
                            <Form.Control id="jesters" defaultValue="4"/>
                          </Col>
                        </Form.Group>
                        <Form.Switch type="switch" id="archwizard" label="ArchWizard" />
                      </FormGroup>
                    <FormGroup className="border formgroup" as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        <h2>Suits</h2>
                      </Form.Label>
                      {children_ui_suits}
                    </FormGroup>
                    <FormGroup className="border formgroup" as={Col}>
                      <Form.Label as="legend" column sm={2}>
                        <h2>Ranks</h2>
                      </Form.Label>
                      {children_ui_card_ranks}
                    </FormGroup>
                  </Row>
              </Form>
              <ButtonGroup>
                <Button className="m-1" variant="primary" onClick={()=> handleCreateGame()}>Create Game</Button>
                <Button className="m-1" variant="danger" onClick={()=> handleDeleteGame()}>Delete Game</Button>
                <Button className="m-1" variant="success" onClick={()=> handleStartGame()}>Start</Button>
              </ButtonGroup>
          </Container>
          <Container className="formgroup">
            <h1>Players at this table</h1>
            <ul>
              {children_ui_players}
            </ul>
          </Container>
        </Wrapper>
    );
}

const Wrapper = Styled.section`
.container {
}
img {
  height: 50px;
  width: 50px;
}
.formgroup {
  background: white;
}
`;