import axios = require('axios');
import * as env from './env'

export const listImagesByTagHandler = async (req: any, res: any) => {
  const tag = req.query.tag;
  const response = await axios.default
    .get(`/resources/image/tags/${tag}`,
      {
        baseURL: `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUDNAME}`,
        withCredentials: true,
        auth: {
          username: env.CLOUDINARY_API_KEY,
          password: env.CLOUDINARY_API_SECRET
        }
      });
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET');
  res.status(response.status).send(response.data);
};

export const listImagesInFolderHandler = async (req: any, res: any) => {
  const folderName = req.query.folder_name;
  const response = await axios.default
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
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET');
  res.status(response.status).send(response.data);
};
