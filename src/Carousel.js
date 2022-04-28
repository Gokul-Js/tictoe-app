import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const carousel = () => {
  return (
    <div>
       <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 h-30"
      src="https://images3.alphacoders.com/175/175215.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Play Free Super Mario</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://logonoid.com/images/call-of-duty-logo.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Play Call of Duty</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://games.mxdwn.com/wp-content/uploads/2017/12/PUBG-banner-1.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Play PUBG Games</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default carousel