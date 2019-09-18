import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background: #f20530;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Title() {
  return (
    <Header>
      <h1>Corners Of Cologne</h1>
    </Header>
  );
}

export default Title;
