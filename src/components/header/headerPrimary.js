import PropTypes from "prop-types"
import React from "react"
import Container from "../container/container"
import styles from "./header.module.css"

const HeaderPrimary = ({ title }) => (
  <Container>
    <header
      className={`${styles.primary} ${styles.header}`}
    >
      <h1>
        {title}
      </h1>
    </header>
  </Container>
)

HeaderPrimary.propTypes = {
  title: PropTypes.string,
}

HeaderPrimary.defaultProps = {
  title: ``,
}

export default HeaderPrimary