import React from "react"
import "./layout.css"
import Footer from "./footer/Footer"
import Container from "./container/container"
import HeaderPrimary from "../components/header/headerPrimary"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <>
        <HeaderPrimary title={title}></HeaderPrimary>
        <main>{children}</main>
        <Container>
          <Footer />
        </Container>
      </>
    )
  }
}

export default Layout
