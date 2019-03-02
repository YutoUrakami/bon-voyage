import axios = require('axios');
import * as env from './env'

export const listFolderHandler = async (req: any, res: any) => {
  const response = await axios.default
    .get(`/folders`,
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
