import React, { Component } from 'react';
import uuid from 'uuid';
import {Table} from 'react-bootstrap';
import { deleteListItem } from '../actions/ToDoListActions'

export default class ListDisplayTable extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let {listArray} = this.props

    let listTable = listArray.map(listitem =>{

      if(listitem.editing){
        let messageTd = <td>{listitem.message}</td>
        console.log('td');
      }else{
        let messageTd = <td><input value={listitem.message}/></td>
        console.log('input');
      };

      return(
        <tr key={listitem.id}>
          {messageTd}
          <td><button onClick={x=>deleteListItem(listitem.id)}>Delete</button></td>
          <td><button>Edit</button></td>
        </tr>
        )
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
