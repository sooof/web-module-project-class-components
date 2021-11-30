import React from 'react';

const Item = props => {

    const handleClick = () =>{
        console.log(Item)
        props.handleToggleItem(props.item)
    }
  return (
    <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Item;