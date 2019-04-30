import React from "react";

class CoolButton extends React.Component {
  render() {
    console.log(this.props);
    const { className, children, isActive, isDanger } = this.props;
    return (
      <div>
        <button className={className}>{children}</button>
      </div>
    );
  }
}

export default CoolButton;
