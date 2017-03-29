import React, { Component } from 'react';
import { createListItem } from '../actions/ToDoListActions';

export default class NewListItemForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputField: ""
    };

    this._changeinputField = this._changeinputField.bind(this);
  }

_changeinputField(str){
  this.setState({
    inputField: str
  })
}

  render(){

    let {inputField} = this.state;
    let {_changeinputField} = this;

    return(
      <div>
        <form onSubmit={(e=>{
          e.preventDefault();
          createListItem({message: inputField});
          this.setState({
            inputField: ""
          });
        })}>
          <input type="text" value={inputField} onChange={(e=>{_changeinputField(e.target.value)})} required/>
          <br/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}
