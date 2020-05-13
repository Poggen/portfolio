import PropTypes from "prop-types"
import React from "react"
import Container from "../container/container"
import "../text/text.module.css"

const TextPrimary = ({ children }) => (
  <Container>
    <div>
      {children}
    </div>
  </Container>
)

TextPrimary.propTypes = {
  title: PropTypes.string,
}

TextPrimary.defaultProps = {
  title: ``,
}

export default TextPrimary