import React, { Component } from 'react';
import ListDisplayTable from './ListDisplayTable'
import ListStore from '../stores/ListStore'
import NewListItemForm from './NewListItemForm'

export default class Layout extends Component {

  constructor(props){
    super(props);

    this.state = {
      listArray: []
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    this.setState({
      listArray: ListStore.getAll()
    });
    ListStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ListStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      listArray: ListStore.getAll()
    });
  }

  render(){
    let {listArray} = this.state;

    return(
      <div>
        <h1>To-do List!</h1>
        <ListDisplayTable listArray = {listArray}/>
        <NewListItemForm />
      </div>
    )
  }
}
