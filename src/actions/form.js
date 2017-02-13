import type { Action } from '../actions/types';

export function changeValue() {
  return {
    type: 'CHANGE_VALUE',
    el: '',
    value: ''
  }
}
