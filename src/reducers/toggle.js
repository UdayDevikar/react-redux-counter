import { TOGGLE, NOTOGGLE } from "../actions/actions";

const initialState = {
    show: true,
};

export function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        show: true,
      };
    case NOTOGGLE:
      return {
        show: false,
      };
    default:
      return initialState;
  }
}
