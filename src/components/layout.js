import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "./layout.css"
import Footer from "./footer/Footer"
import Container from "./container/container"
import HeaderPrimary from "../components/header/headerPrimary"
import Zoomable from "./Zoomable"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <MDXProvider
        components={{
          img: (props) => (
            <Zoomable>
              <img {...props} />
            </Zoomable>
          ),
        }}
      >
        <HeaderPrimary title={title}></HeaderPrimary>
        <main>{children}</main>
        <Container>
          <Footer />
        </Container>
      </MDXProvider>
    )
  }
}

export default Layout
