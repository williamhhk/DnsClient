import { counterReducer,counterReducer1 } from './reducers/counter';
import { routerReducer, RouterState } from '@ngrx/router-store';

export const appStore = {
    counter: counterReducer,
    counter2: counterReducer1,
    router : routerReducer
}

export interface AppStore {
  router : RouterState;
}