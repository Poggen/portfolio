import PropTypes from "prop-types"
import React from "react"
import Container from "../container/container"
import * as styles from "./header.module.css"

const HeaderTertiary = ({ tertiary }) => (
  <Container>
    <header
      className={`${styles.tertiary}`}
    >
      <body>
       <a href="https://www.jakobmagnusson.se/">← Back to start</a>
      </body>
    </header>
  </Container>
)

HeaderTertiary.propTypes = {
  title: PropTypes.string,
}

HeaderTertiary.defaultProps = {
  title: ``,
}

export default HeaderTertiary