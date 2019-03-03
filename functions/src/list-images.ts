import axios = require('axios');
import * as env from './env'

export const listImagesByTagHandler = async (tag: string) => {
  return await axios.default
    .get(`/resources/image/tags/${tag}`,
      {
        baseURL: `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUDNAME}`,
        withCredentials: true,
        auth: {
          username: env.CLOUDINARY_API_KEY,
          password: env.CLOUDINARY_API_SECRET
        }
      });
};

export const listImagesInFolderHandler = async (folderName: string) => {
  return await axios.default
    .get(`/resources/image/upload`,
      {
        baseURL: `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUDNAME}`,
        withCredentials: true,
        auth: {
          username: env.CLOUDINARY_API_KEY,
          password: env.CLOUDINARY_API_SECRET
        },
        params: {
          prefix: `${folderName}/`,
          context: true,
          max_results: 500
        }
      });
};
