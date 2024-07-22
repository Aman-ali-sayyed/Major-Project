const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
  
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV', // specify the folder where you want to store the images
      allowedFormats: ['jpg', 'png', 'jpeg'], // specify allowed image formats
      //public_id: (req, file) => file.originalname, // customize the public ID of the image
    },
});

module.exports = {
    cloudinary,
    storage,
}
  