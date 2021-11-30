// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.j


  import React from "react";

  import Item from "./Item";
  
  // const TodoList = props => {
   
  //   return (
  //     <div className="todo-list">
  //       {props.todolists.map(item => (
  //         <Item handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
  //       ))}
  //     </div>
  //   );
  // };
  
  // export default TodoList;
class TodoList extends React.Component {
    render(){
        // console.log("TodoList = ", this.props.todolists)
        return(
            <div className="todo-list">
                {/* <p>TodoList</p> */}
               {
                   this.props.todolists.map(item=> 
                    // <Item key={item.id} item={item} />
                    <Item handleToggleItem={this.props.handleToggleItem} key={item.id} item={item} />
                    )
               } 
            </div>
        )
    }
}
export default TodoList;