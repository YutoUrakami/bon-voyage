import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import {Image} from "./models/image";
import rootReducer from "./reducers";

export interface ImagesListState {
  error?: Error,
  index: number,
  isLoading: boolean,
  list: Image[],
}

export interface FolderListState {
  error?: Error,
  isLoading: boolean,
  list: string[],
}

export const generateStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk))
};
