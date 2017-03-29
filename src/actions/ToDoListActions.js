import AppDispatcher from '../AppDispatcher';
import uuid from 'uuid';

export function createListItem(listItem){
  listItem.id = uuid();
  listItem.editing = false;

  AppDispatcher.dispatch({
    type: 'ADD_LIST',
    payload: listItem
  });
}

export function deleteListItem(listItemId){

  AppDispatcher.dispatch({
    type: 'DELETE_LIST',
    payload: listItemId
  });
}
