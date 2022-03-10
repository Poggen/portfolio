import React from 'react'
import Zoom from 'react-medium-image-zoom'

import * as styles from "./Zoomable.module.css"
import 'react-medium-image-zoom/dist/styles.css'

const Zoomable = ({ children }) => {
  return (
    <Zoom style={styles} wrapElement="span">
      { children }
    </Zoom>
  )
}

export default Zoomable