import React from 'react'

const Crausel = () => {
  return (
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://www.kfcpakistan.com/images/a4214300-f29b-11ee-84d7-dbdd7f31cafb-1copy_desktop_image-2024-04-04155438.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.kfcpakistan.com/images/6d17d1f0-49c4-11ef-8581-bb135cf642fe-995x356_desktop_image-2024-07-24135546.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.kfcpakistan.com/images/6d17d1f0-49c4-11ef-a04a-7d79419be0af-995x356_desktop_image-2024-07-24135546.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Crausel
