import * as env from './env'
import cloudinary = require('cloudinary');

const cloudinaryV2 = cloudinary.v2;
cloudinaryV2.config({
  cloud_name: env.CLOUDINARY_CLOUDNAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET
});

export const listFolderHandler = async () => {
  return new Promise((resolve, reject) => {
    console.log("will get folders");
    cloudinaryV2.api.root_folders((error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    })
  });
};


export const listImagesByTagHandler = async (tag: string) => {
  return new Promise((resolve, reject) => {
    console.log(`will get resources with tag ${tag}`);
    cloudinaryV2.api.resources({type: 'upload', tags: tag}, (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result);
    })
  });
};

export const listImagesInFolderHandler = async (folderName: string) => {
  console.log(`will get resources with prefix ${folderName}/`);
  return new Promise((resolve, reject) => {
    cloudinaryV2.api.resources(
      {
        type: 'upload',
        prefix: `${folderName}/`,
        max_results: 500,
        context: true
      }, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      })
  });
};
