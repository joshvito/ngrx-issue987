import * as fromMessages from './messages';
import * as fromMessagesState from './messages.state';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

export interface IState {
  messages: fromMessagesState.State;
}

export const reducers: ActionReducerMap<IState> = {
  messages: fromMessages.reducer
};

export function logger(reducer: ActionReducer<IState>): ActionReducer<IState> {
  return function (state: IState, action: any): IState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IState>[] = [logger];

export const getMessagesState = createFeatureSelector<fromMessagesState.State>('messages');

export const getMessageTime = createSelector(
  getMessagesState,
  fromMessages.getLastUpdated
);

export const getMessages = createSelector(
  getMessagesState,
  fromMessages.getMessages
);
