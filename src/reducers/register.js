import * as type from '../constants/register';

const initialState = {
  picker: false,
  genderValue: 'select',
  genderItem: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.GENDER_CHANGED:
      return {
        ...state,
        genderValue: action.genderValue,
        genderItem: action.genderItem
      };
    case type.PICKER_CHANGED:
      return {
        ...state,
        picker: action.picker
      };
    default:
      return state;
  }
}