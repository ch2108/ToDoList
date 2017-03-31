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

export function cancelItemEdit(listItemId){

  AppDispatcher.dispatch({
    type: 'CANCEL_EDIT',
    payload: listItemId
  });
}

export function editItem(listItemId, newMessage){

  AppDispatcher.dispatch({
    type: 'EDIT_ITEM',
    payload: {listItemId, newMessage}
  });
}

export function startItemEdit(listItemId){

  AppDispatcher.dispatch({
    type: 'START_EDIT',
    payload: listItemId
  });
}
