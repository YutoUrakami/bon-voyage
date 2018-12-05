import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {Image} from "./models/image";
import {imagesListReducer} from "./reducers/imagesListReducer";

export interface ImagesListState {
  error?: Error,
  isLoading: boolean,
  list: Image[]
}

export const generateStore = () => {
  return createStore(imagesListReducer, applyMiddleware(thunk))
};
