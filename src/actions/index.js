import {
  CHANGE_ACTIVE_PRESET
} from './constants';

export function changeActivePreset(newActivePreset) {
  return {
    type: CHANGE_ACTIVE_PRESET,
    payload: newActivePreset
  }
}