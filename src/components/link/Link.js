import PropTypes from "prop-types"
import React from "react"
import * as styles from "./link.module.css"

const Link = ({ title, date, url }) => (
  <a href={url} className={styles.link}>{title}</a>
)

Link.propTypes = {
  title: PropTypes.string,
}

Link.defaultProps = {
  title: ``,
}

export default Link