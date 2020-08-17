import React, { Component } from 'react';
import { loadRandomBeer } from './../services/ironbeers';

class SingleBeerView extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
      beer: [],
    };
  }

  componentDidMount() {
    loadRandomBeer()
      .then((data) => {
        const beer = data;
        console.log(beer);
        this.setState({
          loaded: true,
          beer: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const beer = this.state.beer;
    return (
      <div>
        {this.state.loaded && (
          <div className="single-beer-view">
            <img
              className="single-beer-image"
              src={beer.image_url}
              alt={beer.name}
            />
            <div className="row mt-5">
              <div className="col text-left">
                <h2>{beer.name}</h2>
              </div>
              <div className="col text-right">{beer.attenuation_level}</div>
            </div>
            <div className="row">
              <div className="col text-left">
                <small>{beer.tagline}</small>
              </div>
              <div className="col text-right">
                <small>{beer.first_brewed}</small>
              </div>
            </div>
            <p className="text-left mt-3">{beer.description}</p>
            <p className="text-left mt-3">
              <small>{beer.contributed_by}</small>
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default SingleBeerView;
