import React from 'react';
import { Carousel } from 'react-bootstrap';

const ItemListContainer = () => {
  return (
    <div className="container">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <Carousel fade className="carousel" style={{ width: '1280px', height: '290px' }}>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/public/img/Banner_mercadopago.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/public/img/Promo rleojes hombres.jpeg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="/public/img/Grabado alianzas.jpeg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
