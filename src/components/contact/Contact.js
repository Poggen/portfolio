import PropTypes from "prop-types"
import React from "react"
import * as styles from "./contact.module.css"
import Container from "../container/container"
import Link from "../link/Link"
import Links from "./links.json"
import HeaderSecondary from "../header/headerSecondary"

const Contact = ({ children }) => (
  <>
    <HeaderSecondary title="Contact" />
    <Container>
      <div className={styles.contact}>
        {Links.map(link => {
          return (
            <Link title={link.title} url={link.url} key={link.title}></Link>
          );
        })}
      </div>
    </Container>
  </>
)

Contact.propTypes = {
  title: PropTypes.string,
}

Contact.defaultProps = {
  title: ``,
}

export default Contact