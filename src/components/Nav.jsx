import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faMagnifyingGlass,} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { Logo } from '../assets';

const Nav = () => {
      const colour = {
        color: "#0f0b0b"
    };
  return (
    <nav class="navbar navbar-expand-lg  px-lg-5">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img class="me-lg-5" src= {Logo} alt=""/></a>
    <a href="#" class="cart-nav">
          <FontAwesomeIcon icon={faShoppingBag} style={colour} size='2x' />
            <span class="badge rounded-pill badge-notification bg-warning">2</span>
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-lg-0 fw-bold">
        <li class="nav-item">
          <a class="nav-link active  ms-lg-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Our Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Health Benefits</a>
        </li>
         <li class="nav-item">
          <a class="nav-link " href="#">Blog</a>
        </li>
         <li class="nav-item">
          <a class="nav-link " href="#">FAQs</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={colour} size='2x' />
         <a class="link-secondary ms-3" href="#">
          <FontAwesomeIcon icon={faHeart} style={colour} size='2x' />
        
      </a>
      <a href="#" class="ms-3">
          <FontAwesomeIcon icon={faShoppingBag} style={colour} size='2x' />
          <span class="badge rounded-pill badge-notification bg-warning">2</span>
        </a>
        <a href="#">
          <div class="d-inline-flex position-relative ms-3">
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
             <span class="visually-hidden">New alerts</span>
          </span>
          <FontAwesomeIcon icon={faUser} style={colour} size='2x' />
        </div>
        </a>
        <button class="btn btn-lg btn-success ms-3" type="submit">Contact Us</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Nav
