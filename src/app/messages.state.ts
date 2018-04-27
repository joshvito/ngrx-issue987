import { List, Record } from 'immutable';
import * as M from './messages.service';

interface IState {
  messages: M.IMessage[];
  datetime: string;
}

const stateRecord = Record({
  messages: List([]),
  datetime: null
});

export class State extends stateRecord implements State {
  messages: List<M.Message>;
  datetime: string;
  constructor(config: IState) {
    super(Object.assign({}, config, {
      messages: config.messages && List(config.messages.map(m => new M.Message(m))),
    }));
  }
}

export const initialState = new State({
  messages: [],
  datetime: undefined
});
