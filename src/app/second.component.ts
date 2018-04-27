import { Component, OnDestroy } from '@angular/core';
import * as MessagesActions from './messages';
import { Store, select } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs/Observable';
import { List } from 'immutable';
import { Message } from './messages';

@Component({
  selector: 'app-second-component',
  template: '<h1>Last Updated (Receiver)</h1><div>{{(messagesObservable | async)}}</div>'
})
export class SecondComponent {
  messagesObservable: Observable<string>;

  constructor(private store: Store<any>) {
    this.messagesObservable = this.store.pipe(select(fromRoot.getMessageTime));
    this.messagesObservable.subscribe(data => {
      console.log(typeof data);
    });
  }

}
