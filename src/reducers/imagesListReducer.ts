import {Dispatch, Reducer} from "redux";
import {Image} from "../models/image";
import * as cf from "../services/cloudFunctions"
import {ImagesListState} from "../store";
import {emptyMetadata} from "../models/imageMetadata";

const LISTING = "LISTING";
const LISTED_IMAGES = "LISTED_IMAGES";
const FAILED_LISTING = "FAILED_LISTING";
const UPDATE_INDEX = "UPDATE_INDEX";

export type ListImagesAction = (
  | ReturnType<typeof listing>
  | ReturnType<typeof listedImages>
  | ReturnType<typeof failedListing>
  | ReturnType<typeof updateIndex>
  )

export const listing = (isLoading: boolean) => ({
  loading: isLoading,
  type: LISTING as typeof LISTING
});

export const listedImages = (list: Image[], i: number) => ({
  images: list,
  index: i,
  type: LISTED_IMAGES as typeof LISTED_IMAGES
});

export const failedListing = (err: Error) => ({
  error: err,
  type: FAILED_LISTING as typeof FAILED_LISTING
});

export const updateIndex = (newindex: number) => ({
  index: newindex,
  type: UPDATE_INDEX as typeof UPDATE_INDEX
});

export const listingByTag = (tag: string, index: number = 0) => {
  return (dispatch: Dispatch) => {
    dispatch(listing(true));
    cf.listImagesByTag(tag)
      .then((images: Image[]) => {
        dispatch(listedImages(images, index))
      })
      .catch((err: Error) => {
        dispatch(failedListing(err));
      });
  };
};

export const listingInFolder = (folderName: string) => {
  return (dispatch: Dispatch) => {
    dispatch(listing(true));
    cf.listImagesInFolder(folderName)
      .then((images: Image[]) => {
        dispatch(listedImages(images, 0))
      })
      .catch((err: Error) => {
        dispatch(failedListing(err));
      });
  };
};

export const updateSlideShowIndex = (newIndex: number) => {
  return (dispatch: Dispatch) => {
    dispatch(updateIndex(newIndex));
  }
};

export const topImages = () => {
  return (dispatch: Dispatch) => {
    const images: Image[] = [
      new Image("", "https://res.cloudinary.com/dh3lelkhn/image/upload/v1552294452/un_fils/009.jpg", emptyMetadata),
      new Image("", "https://res.cloudinary.com/dh3lelkhn/image/upload/v1552294451/un_fils/010.jpg", emptyMetadata),
      new Image("", "https://res.cloudinary.com/dh3lelkhn/image/upload/v1552294451/un_fils/006.jpg", emptyMetadata),
      new Image("", "https://res.cloudinary.com/dh3lelkhn/image/upload/v1552294451/un_fils/003.jpg", emptyMetadata),
      new Image("", "https://res.cloudinary.com/dh3lelkhn/image/upload/v1551005819/un_fils/001.jpg", emptyMetadata)
    ];
    dispatch(listedImages(images, 0))
  }
};

export const imagesListReducer: Reducer<ImagesListState, ListImagesAction> = (
  state = {
    error: undefined,
    index: 0,
    isLoading: true,
    list: [],
  },
  action
) => {
  switch (action.type) {
    case LISTING:
      return Object.assign({}, state, {isLoading: action.loading, list: []});
    case LISTED_IMAGES:
      return Object.assign({}, state, {index: action.index, isLoading: false, list: action.images});
    case FAILED_LISTING:
      return Object.assign({}, state, {error: action.error, isLoading: false});
    case UPDATE_INDEX:
      return Object.assign({}, state, {index: action.index, isLoading: false});
  }
  return state;
};

