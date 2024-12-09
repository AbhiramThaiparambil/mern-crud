import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure storage for multer
const storage = multer.diskStorage({
   
    
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/profileImg'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); 
    }
});
console.log('img');
const upload = multer({ storage });

export const profileUpload = (req, res) => {
    if (!req.photo) {
      console.log('no files');
      
    }
    console.log(`/profileImg/${req.file.filename}`);
    res.status(200).json({ path: `/profileImg/${req.file.filename}` });
};



export const uploadMiddleware = upload.single('photo');
