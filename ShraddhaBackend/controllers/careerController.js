const CareerApplication = require("../models/CareerApplication");

exports.submitApplication = async (req, res) => {
  try {
    // Handle multer errors
    if (req.fileValidationError) {
      return res.status(400).json({ 
        message: "❌ Invalid file type. Only PDF, DOC, and DOCX files are allowed." 
      });
    }

    const data = {
      ...req.body,
      cvFileName: req.file?.filename || "",
    };

    // Validate required fields
    const requiredFields = ['position', 'name', 'email', 'contact'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      return res.status(400).json({ 
        message: `❌ Missing required fields: ${missingFields.join(', ')}` 
      });
    }

    const application = new CareerApplication(data);
    await application.save();

    res.status(201).json({ 
      message: "✅ Application submitted successfully!",
      applicationId: application._id 
    });
  } catch (error) {
    console.error("Error saving application:", error.message);
    res.status(500).json({ 
      message: "❌ Failed to submit application.",
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
};
