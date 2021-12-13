import React, { useState, useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import Styled from "styled-components";
import { Container, Card, Button} from "react-bootstrap";
import { DiscordLoginButton } from "react-social-login-buttons";
import { GithubLoginButton } from "react-social-login-buttons";
import { AuthContext } from "../App";
import axios from "axios";

export default function Login() {
  const { provider } = useParams();
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });
  const { github, discord } = state;

  useEffect(() => {
    async function fetchData() {
      // After requesting Github access, Github redirects back to your app with a code parameter
      const url = window.location.href;
      const hasCode = url.includes("?code=");

      // If Github API returns the code parameter
      if (hasCode) {
        const newUrl = url.split("?code=");
        window.history.pushState({}, null, newUrl[0]);
        setData({ ...data, isLoading: true });

        const requestData = {
          code: newUrl[1],
          provider: provider
        };

        const proxy_url = state.proxy_url;

        // Use code parameter and other parameters to make POST request to proxy_server
        try { 
          const response = await axios.post(proxy_url, requestData);
          dispatch({ type: "LOGIN", payload: { user: response.data, isLoggedIn: true }});
        } catch(error) {
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed"
          });
        }
      }
    }
    fetchData();
  }, [state, dispatch, data, provider]);
  
  if (state.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <Wrapper>
      <Container>
        <Card className="text-center" >
            <Card.Header>
            <h1>Welcome</h1>
            <span>Login To Play</span>
            </Card.Header>
            <Card.Body>
              <span>{data.errorMessage}</span>
              <div>
                {data.isLoading ? (
                  <div className="loader-container">
                    <div className="loader"></div>
                  </div>
                ) : (
                  <>
                    <GithubLoginButton onClick={() => {
                      setData({ ...data, errorMessage: "" });
                      window.location.href=`https://github.com/login/oauth/authorize?scope=user:email&client_id=${github.client_id}&redirect_uri=${github.redirect_uri}`;
                    }} />
                    <DiscordLoginButton onClick={() => {
                      setData({ ...data, errorMessage: "" });
                      window.location.href=`https://discord.com/api/oauth2/authorize?client_id=${discord.client_id}&scope=identify&response_type=code&redirect_uri=${discord.redirect_uri}`;
                    }} />
                  </>
                )}
              </div>
          </Card.Body>
        </Card>
      </Container>
    </Wrapper>
  );
}

const Wrapper = Styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: Arial;

    > .card {
      max-width: 50%;
      width: 33%;
    }        
  }
`;
