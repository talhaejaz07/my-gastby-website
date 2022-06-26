import React from "react";
import { Link } from "gatsby";
import { SectionWrapper, H1, H2, Button } from "../components";
import styled from "styled-components";

export default function Error() {
  return (
    <SectionWrapper>
      <Adjuster>
        <H1 color="accent400">404</H1>
        <H2>Page Not Found</H2>
        <Link to="/">
          <Button>Lets Go Home</Button>
        </Link>
      </Adjuster>
    </SectionWrapper>
  );
}

const Adjuster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 55px - 56px - 20px);

  ${(props) => props.theme.breakpoint.tablet} {
    min-height: calc(100vh - 73px - 56px -20px);
  }

  ${(props) => props.theme.breakpoint.mobile} {
    min-height: calc(100vh - 55px - 56px - 20px);
  }
`;
