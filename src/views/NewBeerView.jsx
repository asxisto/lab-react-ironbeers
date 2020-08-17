import React from 'react';

function NewBeerView() {
  return (
    <div>
      <form action="" method="POST" onSubmit={this.handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          name="name"
          type="text"
          placeholder="Beer Name"
          // value={name}
          onChange={this.handleChange}
        />

        <label htmlFor="tagline-input">Tagline</label>
        <input
          id="tagline-input"
          name="tagline"
          type="text"
          placeholder="Beer Name"
          // value={tagline}
          onChange={this.handleChange}
        />

        <label htmlFor="name-input">Name</label>
        <input
          id="name-input"
          name="name"
          type="text"
          placeholder="Beer Name"
          value={this.state.name}
        />
      </form>
    </div>
  );
}

export default NewBeerView;
