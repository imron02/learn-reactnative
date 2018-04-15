import * as type from '../constants/register';

export function changeGender(value, index) {
  return {
    type: type.GENDER_CHANGED,
    genderValue: value,
    genderIndex: index
  };
}

export function changePicker(bool) {
  return {
    type: type.PICKER_CHANGED,
    picker: bool
  };
}
