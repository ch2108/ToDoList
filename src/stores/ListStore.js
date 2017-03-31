import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import { readFromStorage, saveToStorage } from './localStorageFunctions'

import uuid from 'uuid';

let _listArray = readFromStorage() || [
  {
    message: 'Do the dishes',
    id: uuid(),
    editing: false
  },
  {
    message: 'Clean the floor',
    id: uuid(),
    editing: true
  }
];

class ListStore extends EventEmitter {
  constructor(props){
    super(props);

    AppDispatcher.register(action => {

      let {type, payload} = action;

      switch (type){
        case 'ADD_LIST':
        _listArray.push(payload);

        this.emit('CHANGE');
        break;

        case 'DELETE_LIST':
        _listArray = _listArray.filter(function(listItem){
          return listItem.id !== payload
        })

        this.emit('CHANGE');
        break;

        case 'CANCEL_EDIT':
        _listArray = _listArray.map(listItem => {
          if (payload === listItem.id) {
            listItem.editing = false;
          }
          return listItem
        })
        this.emit('CHANGE');
        break;

        case 'EDIT_ITEM':
        _listArray = _listArray.map(listItem => {
          if (payload.listItemId === listItem.id) {
            listItem.message = payload.newMessage;
            listItem.editing = false;
          }
          return listItem
        })
        this.emit('CHANGE');
        break;

        case 'START_EDIT':
        _listArray = _listArray.map(listItem => {
          if (payload === listItem.id) {
            listItem.editing = true;
          }
          return listItem
        })
        this.emit('CHANGE');
        break;
      }
    })
  }

  startListening(cb) {

    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAll() {
    return _listArray;
  }
}



const Store = new ListStore()

export default Store;

Store.startListening(()=>{
  saveToStorage(_listArray);
});
