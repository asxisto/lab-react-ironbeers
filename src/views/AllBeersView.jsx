import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loadBeers } from './../services/ironbeers';

class AllBeersView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beers: [],
    };
  }

  componentDidMount() {
    loadBeers()
      .then((data) => {
        console.log(data);
        this.setState({
          loaded: true,
          beers: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>All Beers</h2>
        {this.state.loaded &&
          this.state.beers.map((item) => (
            <div key={item._id}>
              <Link to={`/beers/${item._id}`}>
                <div className="row">
                  <div className="col-3 my-auto">
                    <img
                      className="beer-image"
                      src={item.image_url}
                      alt={item.name}
                    />
                  </div>
                  <div className="col-9 text-left my-auto">
                    <h4>{item.name}</h4>
                    <h6>{item.tagline}</h6>
                    <p>Created by: {item.contributed_by}</p>
                  </div>
                </div>
              </Link>
              <hr />
            </div>
          ))}
      </div>
    );
  }
}

export default AllBeersView;
