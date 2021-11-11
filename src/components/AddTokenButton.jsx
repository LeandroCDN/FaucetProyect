import React, { Component } from 'react'

class AddTokenButton extends Component {

  render() {
    return (
      <button
        class="btn1"
        type="submit"
        onClick={(event) => {
        event.preventDefault()
        this.props.addToken()
        }}>
      Add PVP token
      </button>
    );
  }
}

export default AddTokenButton;