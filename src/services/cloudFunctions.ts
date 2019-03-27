import axios = require('axios');
import env = require('../env');
import {Image} from '../models/image'
import {emptyMetadata, ImageMetadata} from "../models/imageMetadata";

const cloudFunctions = axios.default.create({
  baseURL: env.functionsEndpoint
});

const getMetadata = (context?: { [key: string]: any }) => {
  if (!context) {
    return emptyMetadata;
  }
  const custom = context.custom;
  if (!custom) {
    return emptyMetadata;
  }
  return new ImageMetadata(custom.camera || "", custom.lens, custom.film, custom.model);
};

const toImagesArray = (resources: Array<{ [key: string]: any }>) => {
  return resources.map((resource) => {
    window.console.log(resource);
    return new Image(resource.public_id, resource.secure_url, getMetadata(resource.context))
  });
}; 

export const listImagesByTag = async (tag: string) => {
  const res = await cloudFunctions.get(
    "/listImagesByTag",
    { params: { "tag": tag } }
    );
  return toImagesArray(res.data.resources);
};

export const listFolders = async () => {
  const res = await cloudFunctions.get("/listFolders");
  const folders: Array<{ [key: string]: any }> = res.data.folders;
  return folders.map((folder) => {
    return folder.name
  });
};

export const listImagesInFolder = async (folderName: string) => {
  const res = await cloudFunctions.get(
    "/listImagesInFolder",
    {params: {"folder_name": folderName}}
    );
  return toImagesArray(res.data.resources);
};
