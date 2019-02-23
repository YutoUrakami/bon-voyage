import {combineReducers} from "redux";
import {imagesListReducer} from "./imagesListReducer";
import {folderListReducer} from "./folderListReducer";

export default combineReducers({
  folders: folderListReducer,
  images: imagesListReducer
})
