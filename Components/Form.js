import React from 'react';

const incrementNumber = (props) =>{
  return(
    <div>
    <button onClick={props.inc} name='one'>+1</button>
    <button onClick={props.inc} name='ten'>+10</button>
    </div>
  )
}

export default incrementNumber;
