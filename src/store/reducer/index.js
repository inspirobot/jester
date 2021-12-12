export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    proxy_url: `${process.env.REACT_APP_SERVER_URL}/authenticate`,
    github: {
        client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_GITHUB_REDIRECT_URI,
    },
    discord: {
        client_id: process.env.REACT_APP_DISCORD_CLIENT_ID,
        redirect_uri: process.env.REACT_APP_DISCORD_REDIRECT_URI,
    },
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
        localStorage.setItem("user", JSON.stringify(action.payload.user))
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          user: action.payload.user
        };
      }
      case "LOGOUT": {
        localStorage.clear()
        return {
          ...state,
          isLoggedIn: false,
          user: null
        };
      }
      default:
        return state;
    }
  };
  