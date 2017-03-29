import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';
import { readFromStorage, saveToStorage } from './localStorageFunctions'

import uuid from 'uuid';

// let _listArray = readFromStorage();
let _listArray = [
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
        saveToStorage(_listArray);
        this.emit('CHANGE');
        break;

        case 'DELETE_LIST':
        _listArray = _listArray.filter(function(listItem){
          return listItem.id !== payload
        })
        // saveToStorage(_listArray);
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

export default new ListStore();
