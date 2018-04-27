import { Component } from '@angular/core';
import * as MessagesActions from './messages';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Message } from './messages.service';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';
import { MessageService } from './messages.service';

@Component({
  selector: 'app-third-component',
  template: '<h2>Third Component (Receiver)</h2><div *ngFor="let data of (_messages.messagesObservable$ | async)">{{data?.text}}</div>'
})
export class ThirdComponent {
  // messagesObservable: Observable<List<Message>>;

  constructor(
    private store: Store<any>,
    public _messages: MessageService
  ) {}

}
