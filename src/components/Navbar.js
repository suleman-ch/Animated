import  React from  'react'
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return(
        <>
        <div className="">
        <nav id="navv" className="navbar navbar-expand-lg navbar-dark bg-info Regular shadow fixed-top">
  <Link className="navbar-brand" to="/" style={{fontSize:'30px'}}>React</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto mr-5">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
</div>

        </>
    )
}

export default Navbar;