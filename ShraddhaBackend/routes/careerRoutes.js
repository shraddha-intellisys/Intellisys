const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { submitApplication } = require("../controllers/careerController");

// Configure Multer for CV upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9) + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});

// File filter for security
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.pdf', '.doc', '.docx'];
  const fileExtension = path.extname(file.originalname).toLowerCase();
  
  if (allowedTypes.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, DOC, and DOCX files are allowed'), false);
  }
};

const upload = multer({ 
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  }
});

router.post("/", upload.single("cv"), submitApplication);

module.exports = router;
