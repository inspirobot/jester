import React from 'react';
import { Table } from 'react-bootstrap';

export default function Games(props) {

    const child = props.games.map((game, index) => {
      return <tr key={game.id} data={game.id} onClick={props.updateGameDetails} >
        <td>{game.id}</td>
        <td>{game.creator.name}</td>
        <td>{game.status}</td>
        <td>{game.players.length}</td>
      </tr>;
    });

    return (
      <div style={{ width: "90%", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", margin: "20px auto auto" }}> Games {new Date(Date.now()).toLocaleDateString()}</h2>
        <Table
          variant="default"
          style={{ width: "100%", margin: "20px auto" }}
          striped
          bordered
          responsive
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Creator</th>
              <th>Status</th>
              <th>Players</th>
            </tr>
          </thead>
          <tbody>
            {child}
          </tbody>
        </Table>
      </div>
    )
}