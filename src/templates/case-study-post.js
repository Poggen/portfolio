import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container/container"
import BlogContent from "../components/blog/BlogContent"
import Styles from "../components/blog/blog.module.css"

class CaseStudyPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    return (
      <Layout location={this.props.location} title={post.frontmatter.title}>
        <SEO
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
        <BlogContent>{post.body}
        </BlogContent>

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
