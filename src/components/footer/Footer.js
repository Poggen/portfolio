import PropTypes from "prop-types"
import React from "react"
import styles from "./footer.module.css"

const Footer = ({ title, date, url }) => (
  <footer className={styles.footer} >
    <p>This site does not track you or collect analytics.</p>
    <p>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a> and hosted on <a href="https://www.netlify.com/">Netlify</a></p>
  </footer>
)

Footer.propTypes = {
  title: PropTypes.string,
}

Footer.defaultProps = {
  title: ``,
}

export default Footer