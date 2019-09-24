import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import GlobalStyles from "./GlobalStyles";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 60px 1fr;
  background: #0dd;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/new" exact component={New} />
      </Router>
    </AppContainer>
  );
}

export default App;
