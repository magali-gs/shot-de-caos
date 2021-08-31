import * as React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

const ContoTitle = styled.h3`
  margin-bottom: 20px;
`
const ContoLink = styled(Link)`
  display: inline;
  margin-bottom: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  border-radius: 1em 0 1em 0;
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
`

const ContoDate = styled.p`
  font-size: 0.8rem;
`

const HistoriasPage = ({ data }) => {
  return (
    <Layout>
      <h2>Histórias</h2>
      <p>
        Roberto Brecht é o autor do Shot de Caos, uma série onde o caótico e o
        inesperado são servidos em contos curtos e impactantes.
      </p>
      <p>{data.allMarkdownRemark.totalCount} contos</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <ContoLink to={node.fields.slug}>{node.frontmatter.title}</ContoLink>
          <ContoDate>{node.frontmatter.date}</ContoDate>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default HistoriasPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
