export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export interface Action {
  type: string;
  payload?: any;
}

export interface IncrementAction extends Action {
  offset: number;
}
 
export interface DecrementAction extends Action {
  offset: number;
}

export class MessageActions {
  static addMessage(offset: number): IncrementAction {
    return {
      type: INCREMENT,
	  offset : offset
    };
  }
  static deleteMessage(offset: number): DecrementAction {
    return {
      type: DECREMENT,
      offset: offset
    };
  }
}