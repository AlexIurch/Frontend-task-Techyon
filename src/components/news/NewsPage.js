import React from 'react';
import { Carousel } from 'react-bootstrap';
import './NewsPage.css';
import news from './Data.js'

function NewsPage() {
  return (
    <div className="main-block">
    <div className=''>
      
        
          <Carousel>
            {news.map(item => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt={item.title}
                />
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
    

    </div>
    </div>
  );
};

export default NewsPage;
