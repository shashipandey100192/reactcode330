import React from 'react'
import { Link } from 'react-router-dom'

function Mobileheader() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="newmobile">New mobile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="recharge">Recharge</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="repair">Repair</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="exchange">Exchange</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        <Link to="/homepage">main</Link>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Mobileheader