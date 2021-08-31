import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql, StaticQuery } from "gatsby"

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 78vh;
`

const Container = styled.div`
  text-align: center;
`

const SiteTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
  text-transform: uppercase;
`

const SiteAuthor = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

const SiteDescription = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`

const LandingPage = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
          <SiteAuthor>por {data.site.siteMetadata.subtitle}</SiteAuthor>
          <SiteDescription>
            {data.site.siteMetadata.description}
          </SiteDescription>
        </Container>
      </OuterContainer>
    )}
  />
)

LandingPage.propTypes = {
  siteTitle: PropTypes.string,
  siteSubTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

LandingPage.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
  siteSubTitle: ``,
}

export default LandingPage
