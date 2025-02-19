import React, { useState } from 'react'
import ReactDOM from "react-dom"

function PortalCounter({count}) {
  return ReactDOM.createPortal(
    <div className='count_value'>Counter Value : {count}</div>,
    document.getElementById("portal-counter-root")
  )
}

export default PortalCounter