import React from 'react';
import Card from './Card';


const cardData = [
  {
    image: 'https://m.media-amazon.com/images/I/61vNo+aPWUL.jpg',
    title: 'Smart Watch',
    price: 69.49,
    rating: 4,
    buttonLabel: 'Buy Now'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Vs47S5N0DqIEBIhl-LrAsZWSNkXEjCL9UQ&s',
    title: 'Earphone',
    price: 40,
    rating: 3,
    buttonLabel: 'Buy Now'
  },
  {
    image: 'https://www.futbolemotion.com/imagesarticulos/229256/540/bota-adidas-f50-pro-fg-ftwr-whitesolar-redlucid-blue-0.jpg',
    title: 'Adidas F50',
    price: 100,
    rating: 4,
    buttonLabel: 'Buy Now'
  },
  { 
    image: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-491396-sm-s928bzkgeub-539463970?$650_519_PNG$',
    title: 'Samsung S24 Ultra',
    price: 999.99,
    rating: 5,
    buttonLabel: 'Buy Now'
  },
  
  
];

function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        {cardData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
            rating={card.rating}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
