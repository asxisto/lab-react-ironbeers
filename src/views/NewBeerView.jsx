import React, { Component } from 'react';
import { addNewBeer } from './../services/ironbeers';

class NewBeerView extends Component {
  constructor() {
    super();
    this.state = {
      newBeer: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: Number(event.target.attenuation_level.value),
      contributed_by: event.target.contributed_by.value,
    };

    addNewBeer(newBeer)
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state.newBeer;

    // console.log(this.props);
    // console.log(typeof attenuation_level);
    return (
      <div className="container">
        <form
          className="form-group"
          action=""
          method="POST"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input
              id="name-input"
              name="name"
              type="text"
              className="form-control"
              placeholder="Beer Name"
              value={name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tagline-input">Tagline</label>
            <input
              id="tagline-input"
              name="tagline"
              type="text"
              className="form-control"
              placeholder="Beer Tagline"
              value={tagline}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description-input">Description</label>
            <textarea
              rows="3"
              id="description-input"
              name="description"
              type="text"
              className="form-control"
              placeholder="Beer Description"
              value={description}
            />
          </div>

          <div className="form-group">
            <label htmlFor="brewed-input">First Brewed On</label>
            <input
              id="brewed-input"
              name="first_brewed"
              type="text"
              className="form-control"
              placeholder="mm/yyyy"
              value={first_brewed}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tips_input">Brewers Tips</label>
            <input
              id="tips-input"
              type="text"
              placeholder="Tips"
              className="form-control"
              name="brewers_tips"
              value={brewers_tips}
            />
          </div>

          <div className="form-group">
            <label htmlFor="attenuation-input">Attenuation Level</label>
            <input
              id="attenuation-input"
              type="number"
              className="form-control"
              placeholder="0-100"
              name="attenuation_level"
              value={attenuation_level}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author-input">Contributed by</label>
            <input
              id="author-input"
              type="text"
              className="form-control"
              placeholder="Your name"
              name="contributed_by"
              value={contributed_by}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit new beer
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeerView;
