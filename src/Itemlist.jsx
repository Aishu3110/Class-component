// This code is supposed to display a list of items.
// Find and correct the mistake to make it work.

import React from 'react';
function Itemlist(props) {
  return (
    <ul>
      {props.items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
 
export default Itemlist;