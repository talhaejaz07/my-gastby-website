import React from "react";

import styled from "styled-components";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <Wrapper>
      <p>Copyright © {year} Talha Ejaz, All rights Reserved</p>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: var(--bg-clr-l);

  p {
    color: var(--txt-clr);
    text-align: center;
  }
`;
