import React from 'react';
import { Link } from 'react-router-dom';

function AllBeers() {
  return (
    <div className="text-left container">
      <img className="banner-image banner-top" src="./beer-pub-1.jpg" alt="" />
      <div className="p-3 ">
        <Link to="/beers">
          <h2>All Beers</h2>
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

export default AllBeers;
