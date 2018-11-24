import axios = require('axios');
import env = require('../env');

export const listImagesByTag = async (tag: string) => {
  const res = await axios.default.get(
    `https://${env.cloudFunctionsHost}/list_cloudinary_images_by_tag`,
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
