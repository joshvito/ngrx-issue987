import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs/Observable';
import { List, Record } from 'immutable';

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

@Injectable()
export class MessageService {
  messagesObservable$: Observable<List<Message>>;

  constructor(
    protected _store: Store<any>,
  ) {
    // this throws error
    this.messagesObservable$ = _store.pipe(select(fromRoot.getMessages));

    // this will be handled safely
    // this.messagesObservable$ = _store.select('messages');
  }
}
