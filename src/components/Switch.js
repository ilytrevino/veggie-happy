import React, { Component } from "react";
import Switch from "react-switch";

class SwitchExample extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  handleChange = (checked) => {
    this.setState({ checked });
    this.props.handleSwitch(this.state.checked);
  }

  render() {
    return (
      <Switch
        checked={this.state.checked}
        onChange={this.handleChange}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={15}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={10}
        width={30}
        className="react-switch"
        id="material-switch"
      />
    );
  }
}

export default SwitchExample;
