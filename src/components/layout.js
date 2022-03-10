import React from "react"
import { MDXProvider } from "@mdx-js/react"
import "./layout.css"
import Footer from "./footer/Footer"
import Container from "./container/container"
import Zoomable from "./Zoomable"

class Layout extends React.Component {
  render() {
    const { children } = this.props
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
        <main>{children}</main>
        <Container>
          <Footer />
        </Container>
      </MDXProvider>
    )
  }
}

export default Layout
