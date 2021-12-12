import { Container, Button } from "react-bootstrap";

const GameDetails = (props) => {
 
    const game = props.game;
    
    if (props.game !== null) {
        const players = props.game.players.map((player, index) => {
            return <li key={player.id}>{player.name}</li>;
          });
      
        return (
            <Container>
                <h1>Game Details</h1>
                <p>ID: {game.id }</p>
                <p>Type: {game.type }</p>
                <p>Status: {game.status }</p>
                <p>Creator: {game.creator.name }</p>
                <ul>{players}</ul>
                <Button>Join</Button>
            </Container>
        )
    } else {
        return null
    }
} 

export default GameDetails;