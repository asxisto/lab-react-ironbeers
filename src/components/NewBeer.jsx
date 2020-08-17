import React from 'react';
import { Link } from 'react-router-dom';

function NewBeer() {
  return (
    <div className="text-left container">
      <img className="banner-image" src="./beer-pub-3.jpg" alt="" />
      <div className="p-3 ">
        <Link to="/new-beer">
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos voluptas natus iste, quidem cum consequatur. Consectetur
            maxime ducimus neque, officiis numquam voluptates, quam, magni ut
            tempora nesciunt hic cupiditate facere.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NewBeer;
