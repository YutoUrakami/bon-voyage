import {combineReducers} from "redux";
import {imagesListReducer} from "./imagesListReducer";
import {folderListReducer} from "./folderListReducer";
import {burgerMenuReducer} from "./burgerMenuReducer";
import {swipeHandlerReducer} from "./swipeHandlerReducer";

export default combineReducers({
  folders: folderListReducer,
  images: imagesListReducer,
  burgerMenu: burgerMenuReducer,
  swipeHandler: swipeHandlerReducer
})
