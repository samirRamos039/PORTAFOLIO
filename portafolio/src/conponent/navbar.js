import React from 'react'

const navbar = () => {
  return (
    <div><nav ClassName="navbar navbar-expand-lg bg-body-tertiary">
    <div ClassName="container-fluid">
      <a ClassName="navbar-brand" href="#">Navbar</a>
      <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span ClassName="navbar-toggler-icon"></span>
      </button>
      <div ClassName="collapse navbar-collapse" id="navbarNav">
        <ul ClassName="navbar-nav">
          <li ClassName="nav-item">
            <a ClassName="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link" href="#">Features</a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link" href="#">Pricing</a>
          </li>
          <li ClassName="nav-item">
            <a ClassName="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default navbar
