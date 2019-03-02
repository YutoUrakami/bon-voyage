import {Dispatch, Reducer} from "redux";
import {SwipeHandlerState} from "../store";

const REGISTER_HANDLER = "REGISTER_HANDLER";

export type SwipeHandlerAction = (
  | ReturnType<typeof register>
  )

export const register = () => ({
  type: REGISTER_HANDLER as typeof REGISTER_HANDLER
});

export const registerSwipeHandler = () => {
  return (dispatch: Dispatch) => {
    dispatch(register());
  }
};

export const swipeHandlerReducer: Reducer<SwipeHandlerState, SwipeHandlerAction> = (
  state = {
    registered: false
  },
  action
) => {
  switch (action.type) {
    case REGISTER_HANDLER:
      return Object.assign({}, state, {registered: true});
  }
  return state;
};
