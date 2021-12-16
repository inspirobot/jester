import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Styled from "styled-components";
import { AuthContext } from "../App";
import { Container } from "react-bootstrap";

const lorem_ipsum = "Lorem ipsum|dolor sit|amet consectetur|adipiscing elit|sed do|eiusmod tempor|incididunt ut|labore et|dolore magna|aliqua Ut|enim ad|minim veniam|quis nostrud|exercitation ullamco|laboris nisi|ut aliquip ex|ea commodo|consequat Duis|aute irure dolor|in reprehenderit in|voluptate velit|esse cillum|dolore eu|fugiat nulla pariatur";

export default function Wizard() {
    const { state } = useContext(AuthContext);
  
    if (!state.isLoggedIn) {
      return <Navigate to="/login" />;
    }

    return (
        <Wrapper>
            <ScoreBoard />
            <PlayerList />
            <GameTable />
            <PlayerHand />
            <PlayLog />
        </Wrapper>
    )
};

const Wrapper = Styled.section`
.container {
}
`;