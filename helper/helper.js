const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

// TOKEN DISPATCHER
const getToken = function (headers) { 
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

console.log(process.env.CLOUDINARY_NAME)
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    });
    const GossipStorage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "gossips",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
    });
  module.exports = {    
      getToken,     
      GossipStorage
  }
  