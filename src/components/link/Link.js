import PropTypes from "prop-types"
import React from "react"
import * as styles from "./link.module.css"

const Link = ({ title, date, url, paddingBottom }) => (
  <a href={url} className={paddingBottom ? styles.link: styles.blogLink}>{title}</a>
)

Link.propTypes = {
  title: PropTypes.string, 
  paddingBottom: PropTypes.bool
}

Link.defaultProps = {
  title: ``,
  paddingBottom: true
}

export default Link