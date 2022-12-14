import React from 'react';
import "./CardsSliderComponent.scss";

const CardsSliderComponent = () => {
    return (
      <div className='fatherContainer'>
<div className='cardsSlider'>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true"
     aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://github.com/KholodKhadeja/kholod-card-app/blob/master/public/img1.jpeg?raw=true" 
      className="w-100 d-block sliderImg" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://github.com/KholodKhadeja/kholod-card-app/blob/master/public/img2.jpeg?raw=true" 
      className="w-100 d-block sliderImg" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://github.com/KholodKhadeja/kholod-card-app/blob/master/public/img3.jpeg?raw=true" 
      className="w-100 d-block sliderImg" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" 
  data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button"
   data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>        
</div>
</div>
    );
}

export default CardsSliderComponent;
