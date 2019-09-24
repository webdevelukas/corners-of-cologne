import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import GlobalStyles from "./GlobalStyles";
import defaultTheme from "./themes/default";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 1fr;
  background: ${props => props.theme.main};
`;

function App() {
  return (
    <AppContainer>
      <ThemeProvider theme={defaultTheme}>
        <>
          <GlobalStyles />
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={New} />
          </Router>
        </>
      </ThemeProvider>
    </AppContainer>
  );
}

export default App;
