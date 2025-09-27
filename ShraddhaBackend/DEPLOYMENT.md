# ShraddhaBackend Deployment Guide

## Prerequisites
- Node.js 14+ 
- MongoDB Atlas account
- Render.com account (or your preferred hosting platform)

## Environment Variables Setup

### Required Environment Variables:
1. **NODE_ENV**: Set to `production` for production deployment
2. **PORT**: Server port (Render will set this automatically)
3. **MONGO_URI**: MongoDB connection string
4. **FRONTEND_URL**: Your frontend domain URL for CORS

### Setting up Environment Variables on Render:
1. Go to your Render dashboard
2. Select your backend service
3. Navigate to Environment tab
4. Add the following variables:
   ```
   NODE_ENV=production
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
   FRONTEND_URL=https://your-frontend-domain.com
   ```

## MongoDB Setup
1. Create a MongoDB Atlas cluster
2. Create a database user with read/write permissions
3. Whitelist Render's IP addresses (0.0.0.0/0 for all IPs)
4. Get your connection string and set it as MONGO_URI

## API Endpoints

### Health Check
- **GET** `/health` - Server health status

### Project Proposals
- **POST** `/api/project` - Submit project proposal
  - Required fields: name, email, category, contact, description

### Career Applications
- **POST** `/api/career` - Submit job application
  - Required fields: position, name, email, contact
  - Optional: address, country, state, city, postalcode
  - File upload: CV (PDF, DOC, DOCX, max 5MB)

### Contact Messages
- **POST** `/api/contact` - Submit contact message
  - Required fields: name, email, message

## File Uploads
- CV files are stored in `/uploads` directory
- Supported formats: PDF, DOC, DOCX
- Maximum file size: 5MB
- Files are served statically at `/uploads/filename`

## Security Features
- CORS configured for production
- File type validation for uploads
- File size limits
- Environment-based error messages
- Input validation for all endpoints

## Monitoring
- Health check endpoint at `/health`
- Structured logging with timestamps
- Error tracking in production

## Deployment Checklist
- [ ] Environment variables configured
- [ ] MongoDB connection string set
- [ ] Frontend URL configured for CORS
- [ ] File uploads directory accessible
- [ ] Health check endpoint responding
- [ ] All API endpoints tested
- [ ] Error handling working properly
