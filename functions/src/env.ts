import firebase_functions = require('firebase-functions');

const config = firebase_functions.config();

export const CLOUDINARY_CLOUDNAME = config.cloudinary.cloud_name;
export const CLOUDINARY_API_KEY = config.cloudinary.api_key;
export const CLOUDINARY_API_SECRET = config.cloudinary.api_secret;

export const SERVER_STAGE = config.server.stage;
