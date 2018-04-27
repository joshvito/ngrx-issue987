import { List, Record } from 'immutable';
import { IMessage, Message } from './messages';

interface IState {
  messages: IMessage[];
  datetime: string;
}

const stateRecord = Record({
  messages: List([]),
  datetime: null
});

export class State extends stateRecord implements State {
  messages: List<Message>;
  datetime: string;
  constructor(config: IState) {
    super(Object.assign({}, config, {
      messages: config.messages && List(config.messages.map(m => new Message(m))),
    }));
  }
}

export const initialState = new State({
  messages: [],
  datetime: undefined
});
