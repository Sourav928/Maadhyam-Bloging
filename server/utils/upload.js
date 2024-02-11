import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const mongo_uri = process.env.MONGO_URL;
const storage = new GridFsStorage({
  url: mongo_uri,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
