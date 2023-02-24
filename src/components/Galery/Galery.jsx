import React from 'react'

import "./Galery.css"

import imagengalery1 from "../../assets/img/naruto.jpg"

function Galery() {
  return (
   <>
   <div class=" bg-secondary container-fluid pt-5">
        <div class="container">
        <div class="text-center pb-2">
                <h6 class="text-primary text-uppercase font-weight-bold">Galería</h6>
                <h1 class="mb-4">Dolores lorem lorem</h1>
            </div>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="cards-wrapper">
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
         
        </div>
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
        </div>
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="cards-wrapper">
      <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
         
        </div>
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
         
        </div>
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
         
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="cards-wrapper">
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
          
        </div>
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
         
        </div>
        <div class="card">
          <div class="image-wrapper">
            <img src={imagengalery1} alt="..."/>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        </div>
    </div>
   </>
  )
}

export default Galery