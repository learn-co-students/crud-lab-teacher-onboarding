import React, { Component } from 'react';
import Reviews from './Reviews';
import { connect } from 'react-redux';

class ReviewInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.text, this.props.restaurantId);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Review:{' '}
          <input value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}

export default ReviewInput;
