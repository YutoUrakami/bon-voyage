import {combineReducers} from "redux";
import {imagesListReducer} from "./imagesListReducer";
import {folderListReducer} from "./folderListReducer";
import {burgerMenuReducer} from "./burgerMenuReducer";
import {swipeHandlerReducer} from "./swipeHandlerReducer";
import {modalReducer} from "./modalReducer";

export default combineReducers({
  folders: folderListReducer,
  images: imagesListReducer,
  burgerMenu: burgerMenuReducer,
  swipeHandler: swipeHandlerReducer,
  modal: modalReducer
})
