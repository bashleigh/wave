import { Link } from "gatsby"
import * as React from "react"

const Header = () => (
  <header className="navbar">
    <h2 className="title">Ψ Wave</h2>
    <Link to="/fundimentals">Fundimentals</Link>
    <Link to="/elements">Elements</Link>
    <div className="navbar-right">
      <Link to="https://github.com/bashleigh/wave-func">Github</Link>
    </div>
  </header>
)

export default Header
