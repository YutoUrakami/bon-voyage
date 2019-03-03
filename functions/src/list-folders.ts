import axios = require('axios');
import * as env from './env'

export const listFolderHandler = async () => {
  return await axios.default
    .get(`/folders`,
      {
        baseURL: `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUDNAME}`,
        withCredentials: true,
        auth: {
          username: env.CLOUDINARY_API_KEY,
          password: env.CLOUDINARY_API_SECRET
        }
      });
};
