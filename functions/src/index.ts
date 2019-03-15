import * as functions from 'firebase-functions';
import {listFolderHandler} from "./list-folders";
import {listImagesByTagHandler, listImagesInFolderHandler} from "./list-images";
import CORS = require('cors');

const cors = CORS({
  origin: "https://photo.phoooutty.com"
});

export const listFolders = functions.region("asia-northeast1").https.onRequest( (req, res) => {
  cors(req, res, async () => {
    const cloudinaryRes = await listFolderHandler();
    res.status(cloudinaryRes.status).send(cloudinaryRes.data);
  });
});

export const listImagesByTag = functions.region("asia-northeast1").https.onRequest( (req, res) => {
  cors(req, res, async () => {
    const cloudinaryRes = await listImagesByTagHandler(req.query.tag);
    res.status(cloudinaryRes.status).send(cloudinaryRes.data);
  });
});

export const listImagesInFolder = functions.region("asia-northeast1").https.onRequest( (req, res) => {
  cors(req, res, async () => {
    const cloudinaryRes = await listImagesInFolderHandler(req.query.folder_name);
    res.status(cloudinaryRes.status).send(cloudinaryRes.data);
  });
});
