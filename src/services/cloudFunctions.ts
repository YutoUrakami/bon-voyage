import axios = require('axios');
import env = require('../env');
import {Image} from '../models/image'

const cloudFunctions = axios.default.create({
  baseURL: env.bvEndpoint
});

const getCaption = (context?: { [key: string]: any }) => {
  if (!context) {
    return ''
  }
  const custom = context.custom;
  if (!custom) {
    return ''
  }
  return custom.caption;
};

const toImagesArray = (resources: Array<{ [key: string]: any }>) => {
  return resources.map((resource) => {
    return new Image(resource.public_id, resource.secure_url, getCaption(resource.context))
  });
}; 

export const listImagesByTag = async (tag: string) => {
  const res = await cloudFunctions.get(
    "/cf-api/images/tag",
    { params: { "tag": tag } }
    );
  return toImagesArray(res.data.resources);
};

export const listFolders = async () => {
  const res = await cloudFunctions.get("/cf-api/folders");
  const folders: Array<{ [key: string]: any }> = res.data.folders;
  return folders.map((folder) => {
    return folder.name
  });
};

export const listImagesInFolder = async (folderName: string) => {
  const res = await cloudFunctions.get(
    "/cf-api/images/folder",
    {params: {"folder_name": folderName}}
    );
  return toImagesArray(res.data.resources);
};
