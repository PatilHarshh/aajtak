import React, { Component } from 'react'
import loading from './loading-loading-forever.gif'

export class Spinner extends Component {

  render() {
    return (
      <div className='text-center'>
        <img src= {loading} alt="loading not found" />
      </div>
    )
  }
}

export default Spinner