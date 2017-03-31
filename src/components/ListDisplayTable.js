import React, { Component } from 'react';
import uuid from 'uuid';
import {Table} from 'react-bootstrap';
import { deleteListItem, cancelItemEdit, editItem, startItemEdit} from '../actions/ToDoListActions'

export default class ListDisplayTable extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let {listArray} = this.props

    let listTable = listArray.map(listitem =>{

      let messageTd = '';

      if(listitem.editing){

        return(
          <tr key={listitem.id}>
            <td><input defaultValue={listitem.message} ref={el =>this[listitem.id] = el}/></td>
            <td><button onClick={x=>editItem(listitem.id, this[listitem.id].value)}>Save</button></td>
            <td><button onClick={x=>cancelItemEdit(listitem.id)}>Cancel</button></td>
          </tr>
        )
      }else{

        return(
          <tr key={listitem.id}>
            <td>{listitem.message}</td>
            <td><button onClick={x=>startItemEdit(listitem.id)}>Edit</button></td>
            <td><button onClick={x=>deleteListItem(listitem.id)}>Delete</button></td>
          </tr>
        )
      }
    })

    return(
      <div>
        <Table>
          <tbody>
            {listTable}
          </tbody>
        </Table>
      </div>
    )
  }
}
