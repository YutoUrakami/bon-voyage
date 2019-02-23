import {Dispatch, Reducer} from "redux";
import * as cf from "../services/cloudFunctions"
import {FolderListState} from "../store";

const LISTING_FOLDERS = "LISTING_FOLDERS";
const LISTED_FOLDERS = "LISTED_FOLDERS";
const FAILED_LISTING = "FAILED_LISTING";

export type ListFoldersAction = (
  | ReturnType<typeof listing>
  | ReturnType<typeof listedFolders>
  | ReturnType<typeof failedListing>
  )

export const listing = (isLoading: boolean) => ({
  loading: isLoading,
  type: LISTING_FOLDERS as typeof LISTING_FOLDERS
});

export const listedFolders = (list: string[]) => ({
  folders: list,
  type: LISTED_FOLDERS as typeof LISTED_FOLDERS
});

export const failedListing = (err: Error) => ({
  error: err,
  type: FAILED_LISTING as typeof FAILED_LISTING
});

export const listingFolders = () => {
  return (dispatch: Dispatch) => {
    dispatch(listing(true));
    cf.listFolders()
      .then((folders: string[]) => {
        dispatch(listedFolders(folders))
      })
      .catch(err => {
        dispatch(failedListing(err))
      })
  }
};

export const folderListReducer: Reducer<FolderListState, ListFoldersAction> = (
  state = {
    error: undefined,
    isLoading: true,
    list: [],
  },
  action
) => {
  switch (action.type) {
    case LISTING_FOLDERS:
      return Object.assign({}, state, {isLoading: action.loading, list: []});
    case LISTED_FOLDERS:
      return Object.assign({}, state, {isLoading: false, list: action.folders});
    case FAILED_LISTING:
      return Object.assign({}, state, {error: action.error, isLoading: false});
  }
  return state;
};
