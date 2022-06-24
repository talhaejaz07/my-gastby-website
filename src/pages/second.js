import React from "react";
import styled from "styled-components";
import { SectionWrapper, P, Span, H1, H3 } from "../components";
import { StaticImage } from "gatsby-plugin-image";

export default function second() {
  return (
    // Hero Section
    <SectionWrapper>
      <HeroGrid>
        <div className="description">
          <H3>Hello!</H3>
          <H1>
            I am <Span>Talha</Span> Ejaz
          </H1>
          <P>
            Engineer who loves to create and have over a decade of experience.
          </P>
        </div>
        <StaticImage
          className="portrait"
          src="../assets/images/Portrait.jpg"
          alt="Portrait"
          objectFit="contain"
        />
      </HeroGrid>
    </SectionWrapper>
  );
}

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  place-items: center;

  .description {
    margin-top: ${(props) => props.theme.spacing.large};
    margin-bottom: ${(props) => props.theme.spacing.xLarge};
  }

  ${(props) => props.theme.breakpoint.mobile} {
    grid-template-columns: 1fr;

    .description {
      grid-row: 2 / 3;
    }
  } ;
`;
