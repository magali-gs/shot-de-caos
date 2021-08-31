import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => (
  <Layout>
    <h2>About</h2>
    <div>
      <StaticImage src="../images/roberto.jpg" alt="Roberto Brecht" />
      <p>
        Roberto Brecht é o autor do Shot de Caos, uma série onde o caótico e o
        inesperado são servidos em contos curtos e impactantes.
      </p>
    </div>
  </Layout>
)

export default AboutPage
