import React from 'react';

export default function MyButton(props) {

  return (
    <button style={{
      backgroundColor: props.bgColor,
      color: props.color,
      border: "none",
      outline: "none",
      padding: "8px 12px",
      margin: "12px",
      borderRadius: "8px"
    }} 
    onClick={props.onClick} 
    > {props.content} </button>
  )
}