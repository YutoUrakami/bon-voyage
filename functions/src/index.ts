import * as functions from 'firebase-functions';
import {listFolderHandler} from "./list-folders";
import {listImagesByTagHandler, listImagesInFolderHandler} from "./list-images";
import CORS = require('cors');

const cors = CORS();

const tokyoFunctions = functions.region('asia-northeast1');

export const listFolders = tokyoFunctions.https.onRequest( (req, res) => {
  cors(req, res, async () => {
    await listFolderHandler(req, res)
  });
});

export const listImagesByTag = tokyoFunctions.https.onRequest( (req, res) => {
  cors(req, res, async () => {
    await listImagesByTagHandler(req, res)
  });
});

export const listImagesInFolder = tokyoFunctions.https.onRequest( (req, res) => {
  cors(req, res, async () => {
    await listImagesInFolderHandler(req, res)
  });
});
