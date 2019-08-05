const cloudinary = require('cloudinary')

const storage = ({ stream }) => {
  cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_PUBLIC,
    api_secret:process.env.CLOUD_SECRET
  })

  return new Promise((resolve, reject) => {
    const buffer = cloudinary.v2.uploader.upload_stream((error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  
    stream.pipe(buffer)
  })
}

module.exports = storage
