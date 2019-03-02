import {Dispatch, Reducer} from "redux";
import {BurgerMenuState} from "../store";

const TOGGLE_STATE = "TOGGLE_STATE";

export type BurgerMenuAction = (
  | ReturnType<typeof changeState>
  )

export const changeState = (isActive: boolean) => ({
  active: isActive,
  type: TOGGLE_STATE as typeof TOGGLE_STATE
});

export const changeBurgerMenuActivity = (isActive: boolean) => {
  return (dispatch: Dispatch) => {
    dispatch(changeState(isActive));
  }
};

export const burgerMenuReducer: Reducer<BurgerMenuState, BurgerMenuAction> = (
  state = {
    isActive: false
  },
  action
) => {
  switch (action.type) {
    case TOGGLE_STATE:
      return Object.assign({}, state, {isActive: action.active});
  }
  return state;
};
