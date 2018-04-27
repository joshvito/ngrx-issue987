import { Component } from '@angular/core';
import * as MessagesActions from './messages';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-first-component',
  template: '<h1>First Component (Sender)</h1><button (click)="onClick()">Send Message</button>'
})
export class FirstComponent {
  clickCount = 1;
  constructor(private store: Store<any>) {
  }

  onClick() {
    this.store.dispatch({
      type: MessagesActions.ADD_MESSAGE,
      payload: { id: this.clickCount, text: this.clickCount + ' - hello ' }
    });
    this.clickCount = this.clickCount + 1;
  }
}
