import React from 'react';

// const Item = props => {

//     const handleClick = () =>{
//         console.log(Item)
//         props.handleToggleItem(props.item)
//     }
//   return (
//     <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
//       <p>{props.item.task}</p>
//     </div>
//   );
// };

// export default Item;

class Item extends React.Component {

    handleClick = () =>{
        console.log(Item)
        this.props.handleToggleItem(this.props.item)
    }
    render(){
        return (
            <div onClick={this.handleClick} className={`item${this.props.item.completed ? ' completed' : ''}`}>
              <p>{this.props.item.task}</p>
            </div>
          );
    }
};

export default Item;