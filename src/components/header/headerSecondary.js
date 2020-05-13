import PropTypes from "prop-types"
import React from "react"
import Container from "../container/container"
import styles from "./header.module.css"

const HeaderSecondary = ({ title }) => (
  <Container>
    <header
      className={`${styles.secondary} ${styles.header}`}
    >
      <h2>
        {title}
      </h2>
    </header>
  </Container>
)

HeaderSecondary.propTypes = {
  title: PropTypes.string,
}

HeaderSecondary.defaultProps = {
  title: ``,
}

export default HeaderSecondary