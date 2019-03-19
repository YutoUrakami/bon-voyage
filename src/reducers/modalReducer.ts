import {Dispatch, Reducer} from "redux";
import {ModalState} from "../store";

const SHOW_MODAL = "SHOW_MODAL";
const DISMISS_MODAL = "DISMISS_MODAL";

export type ModalAction = (
  | ReturnType<typeof show>
  | ReturnType<typeof dismiss>
  )

export const show = () => ({
  type: SHOW_MODAL as typeof SHOW_MODAL
});
export const dismiss = () => ({
  type: DISMISS_MODAL as typeof DISMISS_MODAL
});

export const showModal = () => {
  return (dispatch: Dispatch) => {
    dispatch(show());
  }
};

export const dismissModal = () => {
  return (dispatch: Dispatch) => {
    dispatch(dismiss());
  }
};

export const modalReducer: Reducer<ModalState, ModalAction> = (
  state = {
    show: false
  },
  action
) => {
  switch (action.type) {
    case SHOW_MODAL:
      return Object.assign({}, state, {show: true});
    case DISMISS_MODAL:
      return Object.assign({}, state, {show: false});
  }
  return state;
};
