import axios = require('axios');
import env = require('../env');

const cloudFunctions = axios.default.create({
  baseURL: `https://${env.cloudFunctionsHost}`
});

export const listImagesByTag = async (tag: string) => {
  const res = await cloudFunctions.get(
    "/list_cloudinary_images_by_tag",
    { params: { "tag": tag } }
    );
  const resources: Array<{ [key: string]: any }> = res.data.resources;
  return resources.map((resource, index) => {
    return {
      'publicId': resource.public_id,
      'show': index === 0,
      'src': resource.url
    }
  });
};

export const listFolders = async () => {
  const res = await cloudFunctions.get("/list_cloudinary_folders");
  const folders: Array<{ [key: string]: any }> = res.data.folders;
  return folders.map((folder) => {
    return folder.name;
  });
};

export const listImagesInFolder = async (folderName: string) => {
  const res = await cloudFunctions.get(
    "/list_cloudinary_images_in_folder",
    {params: {"folder_name": folderName}}
    );
  const resources: Array<{ [key: string]: any }> = res.data.resources;
  return resources.map((resource, index) => {
    return {
      'publicId': resource.public_id,
      'show': index === 0,
      'src': resource.url
    }
  });
};
