# 💬 Chatterbox

A modern, real-time chat application built with the MERN stack, featuring instant messaging, image sharing, and live user status updates.


## 🔑 Key Features

### Real-time Messaging
- Messages are instantly delivered using WebSocket connections via Socket.io
- Both text and image messages are supported
- Message history is persisted in MongoDB

### User Authentication
- Secure password hashing with bcryptjs (10 salt rounds)
- JWT tokens stored in HTTP-only cookies
- Protected routes on both frontend and backend

### Online Status
- Real-time tracking of online users
- Automatic status updates when users connect/disconnect
- Visual indicators in the UI

### Image Sharing
- Images are uploaded to Cloudinary for efficient storage and delivery
- Automatic image optimization and CDN delivery
- Support for various image formats

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `PUT /api/auth/profile` - Update user profile
- `GET /api/auth/check` - Check authentication status

### Messages
- `GET /api/messages/contacts` - Get all contacts
- `GET /api/messages/:id` - Get messages with a specific user
- `POST /api/messages/send/:id` - Send a message to a user


## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - TailwindCSS component library
- **Zustand** - Lightweight state management
- **Socket.io Client** - Real-time bidirectional communication
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time communication
- **JWT** - JSON Web Tokens for authentication
- **Bcryptjs** - Password hashing
- **Cloudinary** - Cloud-based image storage
- **Resend** - Transactional email service
- **Arcjet** - Security and rate limiting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 20.0.0 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd chatterbox
```

### 2. Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Client URL
CLIENT_URL=http://localhost:5173

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email@example.com
EMAIL_FROM_NAME=Chatterbox

# Security (Arcjet)
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

### 3. Install Dependencies

#### Install all dependencies (backend + frontend):
```bash
npm run build
```

#### Or install individually:

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 4. Configure External Services

#### MongoDB
- **Option 1:** Install MongoDB locally
- **Option 2:** Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Copy the connection string to `MONGO_URI` in your `.env` file

#### Cloudinary (Image Uploads)
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name, API Key, and API Secret from the dashboard
3. Add them to your `.env` file

#### Resend (Email Service)
1. Sign up at [Resend](https://resend.com/)
2. Get your API key
3. Verify your email domain or use a test email
4. Add credentials to your `.env` file

#### Arcjet (Security - Optional)
1. Sign up at [Arcjet](https://arcjet.com/)
2. Create a new project
3. Get your API key and add it to your `.env` file

### 5. Run the Application

#### Development Mode

**Option 1: Run both frontend and backend separately**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

**Option 2: Production build**
```bash
npm run build
npm start
```
