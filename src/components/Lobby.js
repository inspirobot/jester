import React from 'react';

import Navigation from './Navigation';
import Games from './Games';
import GameDetails from './GameDetails';
import { Container } from 'react-bootstrap';

//const server_url = 'https://game-wizard.herokuapp.com/lobby';
const server_url = `${process.env.REACT_APP_SERVER_URL}/lobby`;

const axios = require('axios');

class Lobby extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          selectedGame: null,
          games: [],
          username: "",
          token: null
        };
    }    

    async componentDidMount() {
        try {
          const response = await axios.get(`${server_url}/game`);
          console.log(response.data);
          this.setState({ games: response.data });
        } catch (err) {
        }
    }

    updateGameDetails(e) {
        const id = parseInt(e.currentTarget.getAttribute('data'))
        this.setState({selectedGame: this.state.games.find(game => game.id === id)});
    }

    async registerUser(name) {
        const response = await axios.post(`${server_url}/register`, { name: name} );
        this.state.username = name;
        this.state.token = response.data.token;   
    }
    
    render() {
      return  (
        <div> 
            <Navigation registerUser={this.registerUser.bind(this)}/>
            <Container>
                <Games games={this.state.games} updateGameDetails={this.updateGameDetails.bind(this)} />          
                <GameDetails game={this.state.selectedGame} />          
            </Container>
        </div> 
      );
    }
  }
  
  export default Lobby;