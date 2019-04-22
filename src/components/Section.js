import React from "react"
import styled from "styled-components"

const SectionGroup = styled.div`
  background: #291440;
  height: 560px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
`

const SectionTitleGroup = styled.div`
  align-self: end;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 500px auto;
  margin: 0 100px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 640px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: white;
  font-size: 28px;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`

const Section = props => (
  <SectionGroup>
    <SectionTitleGroup>
      <SectionTitle>{props.title}</SectionTitle>
      <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
  </SectionGroup>
)

export default Section
