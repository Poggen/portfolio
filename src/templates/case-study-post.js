import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container/container"
import CaseContent from "../components/casestudy/CaseContent"
import * as Styles from "../components/casestudy/casestudy.module.css"
import HeaderTertiary from "../components/header/headerTertiary"
import HeaderPrimary from "../components/header/headerPrimary"


class CaseStudyPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    return (
      <>
      <HeaderTertiary />
      <HeaderPrimary title={post.frontmatter.title} />
      <Layout location={this.props.location} title={post.frontmatter.title}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container>
          <p
            className={Styles.postmeta}
          >
            {post.frontmatter.description}
          </p>
        </Container>
        <CaseContent>{post.body}
        </CaseContent>

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
        </ul>
      </Layout>
      </>
    )
  }
}

export default CaseStudyPostTemplate

export const pageQuery = graphql`
  query CaseStudyPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
