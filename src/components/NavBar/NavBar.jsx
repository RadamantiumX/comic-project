import React from 'react'
import "./NavBar.css"



function NavBar() {
  return (
    <>
    <div class="container-fluid bg-dark">
        <div class="row py-2 px-lg-5">
            <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center text-white">
                    <small><i class="fa fa-phone-alt mr-2"></i>+99999999999</small>
                    <small class="px-3">|</small>
                    <small><i class="fa fa-envelope mr-2"></i>lorem@example.com</small>
                </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-white px-2" href="">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a class="text-white px-2" href="">
                        <i class="fab fa-instagram"></i>
                    </a>
                   
                </div>
            </div>
        </div>
    </div>
  
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 display-5 text-uppercase text-primary">LOGO</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <a href="index.html" class="nav-item nav-link active">Acerca de</a>
                    <a href="about.html" class="nav-item nav-link">Eventos</a>
                    <a href="service.html" class="nav-item nav-link">Galería</a>
                    <a href="price.html" class="nav-item nav-link">Extras</a>
                </div>

            </div>
        </nav>
    </div>


	<div class="jumbotron jumbotron-fluid mb-5">
        <div class="container text-center py-5 " style={{marginTop:"6rem"}}>
            <h1 class="text-primary mb-2">Lorem</h1>
            <h1 class="text-white display-3 mb-5">Lorem Ipsum</h1>
            <div class="mx-auto" style={{width:"100%", maxWidth:"600px"}}>
            </div>
        </div>
    </div>
	

    </>
  );
}

export default NavBar