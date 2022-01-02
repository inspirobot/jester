import {Table} from "react-bootstrap";
import React /*, { useState,  useEffect }*/ from "react";
//import axios from "axios";
import { PlayerColours } from "../../shared/constants";
import {backgroundtotextcolor} from "../../util/color";

const testData = {
    players: ['Snuffles', 'Mittens', 'Kitty', 'Sam', 'Bootsie', 'Cosimo', 'Oscar', 'Flinty', 'Candy', 'Tiger', "Oberon", "Fluffy", "Mr T", "Squirrel", "Mordred"],
    rounds: [
        {number: 1, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 2, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 3, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 4, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 5, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 6, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 7, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 8, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 9, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 10, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 11, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 12, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 13, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 14, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 15, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 16, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 17, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 18, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 19, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]},
        {number: 20, scores: [{bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10}, {bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10},{bid: 0, score: -10}]}
    ]
}

const ScoreBoard = (props) => {
/*    const [data, setData] = useState([]);

    useEffect(() => {
        async function getScore(url) {
            try {
                let response = await axios.get(url);
                setData(response.data);
            } catch(error) {
                console.log(error);
            }
        };
        getScore(props.url);
    });
*/
    function renderHeader(scoretable) {
        return (
            <>
                <th></th>
                { scoretable.players.map((player, index) => {
                    return (
                        <th key={"h"+index.toString()} colSpan={2} style={{background: `${PlayerColours[index]}`, opacity: '75%', color: `${backgroundtotextcolor(PlayerColours[index])}`}}>{player}</th>
                    )
                })}
            </>
        )
    }

    function renderRows(scoretable) {
        return scoretable.rounds.map((round, index) => {
            return (
                <tr key={"r"+round.number.toString()}>                     
                    <td key={0} style={{borderRight: '1px solid black'}}>{round.number}</td>
                    { round.scores.map((score, index) => {
                        return (<React.Fragment key={index+1}><td>{score.bid}</td><td style={{borderRight: '1px solid black'}}>{score.score}</td></React.Fragment>
                        );
                    })}   
                </tr>
            )
        });
    }

    return (  
        <Table striped bordered size="sm">
            <thead>
                <tr>
                    {renderHeader(testData)}
                </tr>
            </thead>
            <tbody>    
                    {renderRows(testData)}
            </tbody>        
        </Table>    
    )
};

export default ScoreBoard;