import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';

const Alert = ({
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>Alert</button>
        <SweetAlert
          show={this.state.show}
          title="Demo"
          text="SweetAlert in React"
          onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
});

export default Alert;
