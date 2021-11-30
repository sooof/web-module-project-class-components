// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.j
// class TodoList extends React.Component {

  import React from "react";

  import Item from "./Item";
  
  const TodoList = props => {
   
    return (
      <div className="todo-list">
        {props.todolists.map(item => (
          <Item handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
        ))}
      </div>
    );
  };
  
  export default TodoList;

//     render(){
//         console.log("TodoList = ", this.props.todolists)
//         return(
//             <div>
//                 <p>TodoList</p>
//                {
//                    this.props.todolists.map(item=> 
//                     <Item key={item.id} item={item} />
//                     )
//                } 
//             </div>
//         )
//     }
// }
// export default TodoList;