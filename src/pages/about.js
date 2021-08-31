import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  gap: 25px;
`

const AboutPage = () => (
  <Layout>
    <h2>About</h2>
    <Container>
      <StaticImage src="../images/roberto.jpg" alt="Roberto Brecht" />
      <p>
        Roberto Brecht é o autor do Shot de Caos, uma série onde o caótico e o
        inesperado são servidos em contos curtos e impactantes.
      </p>
    </Container>
  </Layout>
)

export default AboutPage
