// What's wrong with this component? Fix the issue.

import React from 'react';
function Buttoncomponent(props) {
    
  return (
    <button onClick={() => this.props.onClick()}>
      Click me!
    </button>
  );
}

export default Buttoncomponent;