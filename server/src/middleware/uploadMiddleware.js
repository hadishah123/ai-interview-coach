import multer from "multer";
import fs from "fs";

if (
  !fs.existsSync(
    "uploads"
  )
) {
  fs.mkdirSync(
    "uploads"
  );
}

const storage =
  multer.diskStorage({
    destination(
      req,
      file,
      cb
    ) {
      cb(
        null,
        "uploads/"
      );
    },

    filename(
      req,
      file,
      cb
    ) {
      cb(
        null,
        `${Date.now()}-${file.originalname}`
      );
    },
  });

export const upload =
  multer({
    storage,
  });