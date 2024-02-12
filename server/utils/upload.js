import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const conn = mongoose.createConnection(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const storage = new GridFsStorage({
  url: process.env.MONGO_URL,
  db: conn,
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
