import * as React from "react"

const Logo = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : null}
    height={props.height ? props.height : null}
    {...props}
  >
    <path
      data-name="Path 1"
      d="M0 42.06 15.96 0h10.26L10.44 42.06Zm20.34-.96V30.24h10.92V41.1Z"
      fill={props.color}
      opacity={props.opacity ? props.opacity : props.opacity}
    />
  </svg>
)

export default Logo

Logo.defaultProps = {
  width: 31.26,
  height: 42.06,
  color: "#fff",
}
