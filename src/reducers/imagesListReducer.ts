import {Dispatch, Reducer} from "redux";
import {Image} from "../models/image";
import * as cf from "../services/cloudFunctions"
import {ImagesListState} from "../store";

const LISTING = "LISTING";
const LISTED_IMAGES = "LISTED_IMAGES";
const FAILED_LISTING = "FAILED_LISTING";

export type ListImagesAction = (
  | ReturnType<typeof listing>
  | ReturnType<typeof listedImages>
  | ReturnType<typeof failedListing>
  )

export const listing = (isLoading: boolean) => ({
  loading: isLoading,
  type: LISTING as typeof LISTING
});

export const listedImages = (list: Image[]) => ({
  images: list,
  type: LISTED_IMAGES as typeof LISTED_IMAGES
});

export const failedListing = (err: Error) => ({
  error: err,
  type: FAILED_LISTING as typeof FAILED_LISTING
});

export const listingByTag = (tag: string) => {
  return (dispatch: Dispatch) => {
    dispatch(listing(true));
    cf.listImagesByTag(tag)
      .then((images: Image[]) => {
        dispatch(listedImages(images))
      })
      .catch((err: Error) => {
        dispatch(failedListing(err));
      });
  };
};

export const imagesListReducer: Reducer<ImagesListState, ListImagesAction> = (
  state = {
    error: undefined,
    isLoading: true,
    list: [],
  },
  action
) => {
  switch (action.type) {
    case LISTING:
      return Object.assign({}, state, {isLoading: action.loading});
    case LISTED_IMAGES:
      return Object.assign({}, state, {isLoading: false, list: action.images});
    case FAILED_LISTING:
      return Object.assign({}, state, {error: action.error, isLoading: false})
  }
  return state;
};

