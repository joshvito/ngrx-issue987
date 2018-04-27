import { List, Record } from 'immutable';
import * as _state from './messages.state';
import { Store } from '@ngrx/store';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export interface IMessage {
  id: number;
  text: string;
}

const messageRecord = Record({
  id: null,
  text: null
});

export class Message extends messageRecord implements IMessage {
  id: number;
  text: string;
  constructor(config: IMessage) {
    super(config);
  }
}

export function reducer(state = _state.initialState, { type, payload }) {

  switch (type) {
    case ADD_MESSAGE:
      state = state
        .set('datetime', new Date().toString()) as _state.State;

      state = state
        .updateIn(['messages'],
        (list = List([])) => list.push(new Message(payload))) as _state.State;
      break;

    case DELETE_MESSAGE:
      state = state.filter(m => m.id !== payload.id) as _state.State;
      break;

    default:
      break;
  }
  return state;
}

export const getMessages = (state: _state.State) => state.messages;
export const getLastUpdated = (state: _state.State) => state.datetime;
