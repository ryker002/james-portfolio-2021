import React from "react"

export function IconButton({ children, props }) {
  return (
    <button {...props} className={`icon-button ${props?.className}`}>
      {children}
    </button>
  )
}
