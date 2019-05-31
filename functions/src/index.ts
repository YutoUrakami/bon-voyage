import * as functions from 'firebase-functions';
import {listFolderHandler, listImagesByTagHandler, listImagesInFolderHandler} from "./cloudinary";
import CORS = require('cors');
import {SERVER_STAGE} from "./env";

const clientMaxAge = 60 * 60;
const cdnMaxAge = 60 * 60 * 24;

let originStr: string;
let cacheControl: string;
if (SERVER_STAGE === "develop") {
  originStr = "*";
  cacheControl = "no-cache";
} else {
  originStr = "https://photo.phoooutty.com";
  cacheControl = `public, max-age=${clientMaxAge}, s-maxage=${cdnMaxAge}`;
}
const cors = CORS({
  origin: originStr 
});

export const listFolders = functions.region("asia-northeast1").https.onRequest( (req, res) => {
  cors(req, res, async () => {
    const cloudinaryRes = await listFolderHandler();
    res.set('Cache-Control', cacheControl)
      .status(200)
      .send(cloudinaryRes);
  });
});

export const listImagesByTag = functions.region("asia-northeast1").https.onRequest( (req, res) => {
  cors(req, res, async () => {
    const cloudinaryRes = await listImagesByTagHandler(req.query.tag);
    res.set('Cache-Control', cacheControl)
      .status(200)
      .send(cloudinaryRes);
  });
});

export const listImagesInFolder = functions.region("asia-northeast1").https.onRequest( (req, res) => {
  cors(req, res, async () => {
    const cloudinaryRes = await listImagesInFolderHandler(req.query.folder_name);
    res.set('Cache-Control', cacheControl)
      .status(200)
      .send(cloudinaryRes);
  });
});
