import React from "react";

class TodoForm extends React.Component {

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input onChange={this.handleChanges} type="text" name="item" />
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}
export default TodoForm;