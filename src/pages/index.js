import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingPage from "../components/landingPage"


const HomePage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo title="Home" />
      <LandingPage />
    </Layout>
  )
}

export default HomePage