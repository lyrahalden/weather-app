import React, { Component } from 'react';

class Hello extends Component {
      render() {
        return (
        <p>Hi { this.props.to } from { this.props.from }</p>
        );
    }
}

export default Hello;