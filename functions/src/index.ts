import * as functions from 'firebase-functions';
import {listFolderHandler} from "./list-folders";
import {listImagesByTagHandler, listImagesInFolderHandler} from "./list-images";

const tokyoFunctions = functions.region('asia-northeast1');

export const listFolders = tokyoFunctions.https.onRequest(async (req, res) => {
  await listFolderHandler(req, res)
});

export const listImagesByTag = tokyoFunctions.https.onRequest(async (req, res) => {
  await listImagesByTagHandler(req, res)
});

export const listImagesInFolder = tokyoFunctions.https.onRequest(async (req, res) => {
  await listImagesInFolderHandler(req, res)
});
