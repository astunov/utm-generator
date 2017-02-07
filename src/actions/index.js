// @flow

type Action = { type: 'CHANGE_ACTIVE_PRESET', payload: string };
// more types
//  | { type: 'LOGGED_OUT' };

export function changeActivePreset(newActivePreset:Action) {
  return {
    type: 'CHANGE_ACTIVE_PRESET',
    payload: newActivePreset
  };
}
