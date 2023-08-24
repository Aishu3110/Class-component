// There's a problem with prop passing in this parent-child component interaction.
// Diagnose and fix the issue.
import React from 'react';
function Parentcomponent() {
  const message = 'Hello from parent!';
  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
}
function ChildComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default Parentcomponent;