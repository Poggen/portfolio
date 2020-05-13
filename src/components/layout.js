import React from "react"
import { Link } from "gatsby"
import "./layout.css"
import Footer from "./footer/Footer"
import Container from "./container/container"
import HeaderPrimary from "../components/header/headerPrimary"
import Contact from "../components/contact/Contact"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <HeaderPrimary title={title}></HeaderPrimary>
        <main>{children}</main>
        <Contact />
        <Container>
          <Footer />
        </Container>
      </>
    )
  }
}

export default Layout
