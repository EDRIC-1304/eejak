# Eejak Frontend-Backend Connection Guide

## Overview
The frontend and backend are now fully connected. The frontend uses an API utility layer to communicate with the backend API.

## Setup Instructions

### Backend Setup

1. **Navigate to backend folder:**
   ```
   cd backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Create `.env` file** in the backend folder:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the backend server:**
   ```
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend folder:**
   ```
   cd frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **The `.env.local` file is already created** with:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Start the frontend development server:**
   ```
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

## API Integration Details

### API Utility File
**Location:** `frontend/lib/api.js`

The API utility file provides:
- Centralized API configuration
- Automatic token injection in request headers
- Error handling and automatic redirect on auth failure
- Organized API methods by feature (auth, contact, projectEnquiry)

### Available API Methods

#### Authentication (`auth`)
- `auth.login(email, password)` - Login user
- `auth.signup(name, email, password)` - Create new account
- `auth.getCurrentUser()` - Get current user (requires authentication)

#### Contact (`contact`)
- `contact.updateContactDetails(contactData)` - Submit contact form
  - Required fields: `name`, `email`, `subject`, `message`
  - Optional: `phone`

#### Project Enquiry (`projectEnquiry`)
- `projectEnquiry.createEnquiry(enquiryData)` - Submit project enquiry
  - Required fields: `projectType`, `description`, `budget`, `timeline`

### Connected Pages

| Page | Endpoint | Method | Auth Required |
|------|----------|--------|---------------|
| Login | `/auth/login` | POST | No |
| Signup | `/auth/signup` | POST | No |
| Contact | `/contact` | PUT | No |
| Project Enquiry | `/project-enquiries` | POST | Yes |

## Features

✅ **Automatic Token Management** - JWT tokens are automatically included in authenticated requests
✅ **Error Handling** - API errors are caught and displayed to users
✅ **Form Validation** - Client-side validation with server-side error messages
✅ **Loading States** - Form buttons show loading state during submission
✅ **Success/Error Messages** - User feedback for all API operations
✅ **Auto-redirect on Auth Failure** - Unauthorized users are redirected to login

## Troubleshooting

### Frontend can't connect to backend
- Ensure backend is running on `http://localhost:5000`
- Check if `NEXT_PUBLIC_API_URL` in `.env.local` is correct
- Check browser console for CORS errors

### CORS Errors
- Backend has CORS enabled, but verify it's properly configured in `backend/server.js`
- CORS should allow requests from `http://localhost:3000`

### Token Issues
- Tokens are stored in localStorage
- Clear localStorage and login again if issues persist
- Check Network tab in browser DevTools to see token in headers

### MongoDB Connection Issues
- Ensure `MONGO_URI` in backend `.env` is correct
- Check MongoDB connection string format
- Verify MongoDB Atlas IP whitelist allows your connection

## Running Both Servers

### Option 1: Two Terminal Windows
Terminal 1 (Backend):
```
cd backend
npm run dev
```

Terminal 2 (Frontend):
```
cd frontend
npm run dev
```

### Option 2: Concurrently (Optional)
Install concurrently globally:
```
npm install -g concurrently
```

Create a script in root package.json and run both servers together.

## Testing the Connection

1. **Test Backend:**
   - Visit `http://localhost:5000`
   - Should see: `{"message":"Eejak backend is running"}`

2. **Test Frontend:**
   - Visit `http://localhost:3000`
   - Try signing up at `/signup`
   - Try logging in at `/login`
   - Try submitting contact form at `/contact`
   - Try project enquiry at `/project-enquiry`

## Next Steps

- Set up MongoDB Atlas account if not already done
- Configure environment variables for both frontend and backend
- Run both servers and test the application
- Deploy to production when ready
