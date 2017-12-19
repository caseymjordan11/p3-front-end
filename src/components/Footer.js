import React from 'react'

const Footer = ({}) => {
  const footerStyle = {
    position: "relative",
    left: "0",
    bottom: "0",
    width: "100%",
    height: "50px",
    backgroundColor: "rgb(117, 160, 229)",
    color: "white",
    textAlign: "center",
  }
  const ulStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    listStyleType: "none",
    margin: "0",
    padding: "0",
    overflow: "hidden"
  }
  const liStyle = {
    textAlign: "center",
    fontSize: "20px",
  }

  return (
    <div style={footerStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <p>About</p>
        </li>
        <li style={liStyle}>
          <p>Contact</p>
        </li>
        <li style={liStyle}>
          <p>Disclaimer</p>
        </li>
      </ul>
    </div>
  )

}
export default Footer
