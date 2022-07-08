import React from "react";
import styled from "styled-components";

import { SectionWrapper, H1 } from "../components";

export default function blog() {
  return (
    <SectionWrapper>
      <BlogHeroGrid>
        <H1>Blog Posts</H1>
      </BlogHeroGrid>
    </SectionWrapper>
  );
}

const BlogHeroGrid = styled.div`
  display: grid;
`;
