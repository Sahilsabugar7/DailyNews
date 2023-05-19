import React, { Component } from 'react';
import Loading from './Loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='my-3'>
        <img src={Loading} alt="loading"></img>
      </div>
    );
  }
}

export default Spinner
