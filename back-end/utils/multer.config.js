// multer.config.js
const multer = require("multer");
const path = require("path");

const UserAvatar = folderPath => {
    const fileName = Math.floor(100000 + Math.random() * 900000).toString();
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folderPath);
        },
        filename: (req, file, cb) => {
            cb(
                null,
                "user___" +
                    Math.floor(100000 + Math.random() * 900000).toString() +
                    path.extname(file.originalname)
            );
        }
    });

    return multer({ storage: storage });
};
const ProductImg = folderPath => {
    const fileName = Math.floor(100000 + Math.random() * 900000).toString();
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folderPath);
        },
        filename: (req, file, cb) => {
            cb(
                null,
                "product___" +
                    Math.floor(100000 + Math.random() * 900000).toString() +
                    path.extname(file.originalname)
            );
        }
    });

    return multer({ storage: storage });
};

module.exports = { UserAvatar, ProductImg };
