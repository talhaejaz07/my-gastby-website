import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { SectionWrapper, P, Span, H1, H2, H3, Button } from "../components";
import { StaticImage } from "gatsby-plugin-image";

import { GoMailRead } from "@react-icons/all-files/Go/GoMailRead";
import { FaFacebookF } from "@react-icons/all-files/Fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/Fa/FaTwitter";

export default function second() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Talha Ejaz | A resident of internet</title>
        <meta name="description" content="My corner of internet" />
      </Helmet>

      {/* Hero Section */}
      <SectionWrapper>
        <HeroGrid>
          <div className="hero-intro">
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

      {/* About Section */}
      <SectionWrapper backgroundColor="background100">
        <AboutGrid>
          <StaticImage
            src="../assets/images/about-pic.png"
            alt="about-pic"
            objectFit="contain"
          />
          <div className="about-intro">
            <H2 marginBottom="zero">
              <Span>About</Span> Me
            </H2>
            <P textAlignTablet="center">
              My name is Talha Ejaz, and I am a Professional Engineer working
              with mainly Web Technologies. I develop innovative web apps
              designed to engage people working from right here, the land of
              five rivers. I have been engaged in web technologies for over a
              decade now and have used a large array of tools to do my work. I
              have made this website mainly as my portal to vent out the
              thoughts I have without any restrictions. I invite you to read my
              blog posts and share what you think of them with me in the
              comments, also you can find me on almost every social media that
              matters.
            </P>
            <StaticImage
              className="signature"
              src="../assets/images/signature.png"
              alt="signature"
              width={150}
              objectFit="contain"
              placeholder="none"
            />
            <Button>CONTACT ME</Button>
          </div>
        </AboutGrid>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper>
        <ContactGrid>
          <H3 color="accent400">Have something in mind?</H3>
          <H2>Let us keep in touch</H2>
          <P
            margin="0 0 1.5rem 0"
            textAlignDesktop="center"
            textAlignTablet="center"
          >
            You can contact me through the links given below in addition to the
            comments on my blog, I am available on most of the social media
            platforms.
          </P>

          <div className="contact-information">
            <div className="info">
              <a className="icon" href="mailto:talhaejaz@outlook.com">
                <GoMailRead />
              </a>
              <P margin="1.25rem 0 0 0" fontWeight="bold" color="accent400">
                Email
              </P>
              <P>talhaejaz@outlook.com</P>
            </div>

            <div className="info">
              <a
                className="icon"
                href="https://www.facebook.com/TalhaEjaz07"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <P margin="1.25rem 0 0 0" fontWeight="bold" color="accent400">
                Facebook
              </P>
              <P>@TalhaEjaz07</P>
            </div>

            <div className="info">
              <a
                className="icon"
                href="https://twitter.com/TalhaEjaz07ee"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <P margin="1.25rem 0 0 0" fontWeight="bold" color="accent400">
                Twitter
              </P>
              <P>@TalhaEjaz07ee</P>
            </div>
          </div>
        </ContactGrid>
      </SectionWrapper>
    </>
  );
}

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  place-items: center;

  .hero-intro {
    padding-top: ${(props) => props.theme.spacing.large};
    padding-bottom: ${(props) => props.theme.spacing.xLarge};
  }

  ${(props) => props.theme.breakpoint.mobile} {
    grid-template-columns: 1fr;

    .hero-intro {
      grid-row: 2 / 3;
    }
  } ;
`;

const AboutGrid = styled.div`
  padding-top: ${(props) => props.theme.spacing.xLarge};
  padding-bottom: ${(props) => props.theme.spacing.xLarge};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.large};
  place-items: center;

  .about-intro {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.small};
    align-items: flex-start;
  }

  ${(props) => props.theme.breakpoint.tablet} {
    grid-template-columns: 1fr;

    .about-intro {
      align-items: center;
    }
  }
`;

const ContactGrid = styled.div`
  padding-top: ${(props) => props.theme.spacing.xLarge};
  padding-bottom: ${(props) => props.theme.spacing.xLarge};
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;

  .contact-information {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    font-size: ${(props) => props.theme.fontSize.xLarge};
    color: ${(props) => props.theme.color.background100};
    background-color: ${(props) => props.theme.color.accent400};
    padding: ${(props) => props.theme.spacing.small};
    border-radius: 50%;
  }

  .icon:hover {
    background-color: ${(props) => props.theme.color.accent500};
  }

  .icon:active {
    transform: scale(0.99);
  }
`;
