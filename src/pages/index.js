import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Excerpt from "../components/blog/Excerpt"
import TextPrimary from "../components/text/textPrimary"
import Contact from "../components/contact/Contact"
import HeaderSecondary from "../components/header/headerSecondary"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const caseStudiesPosts = posts.filter(post => post.node.fileAbsolutePath.includes('case-studies'))
    const blogPosts = posts.filter(post => post.node.fileAbsolutePath.includes('blog'))

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <TextPrimary>Product Designer at Sveriges Radio with more than 5 years of
        experience working with User Interface Design, Interaction Design and Design
        Systems. Demonstrated experience in creating award winning digital products
        and services for iOS, Android, Web, Wearables and Smart-TVs. Passionate about
        accessibility and late night coding.</TextPrimary>
        <HeaderSecondary title="Case studies" />
        <TextPrimary>
          {caseStudiesPosts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const url = `/case-studies${node.fields.slug}`
            return (
              <Excerpt title={title} url={url}></Excerpt>
            )
          })}
        </TextPrimary>
        <HeaderSecondary title="Blog" />
        <TextPrimary>
          {blogPosts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const url = `/blog${node.fields.slug}`
            return (
              <Excerpt title={title} date={node.frontmatter.date} url={url}></Excerpt>
            )
          })}
        </TextPrimary>
        <Contact />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          fileAbsolutePath
        }
      }
    }
  }
`