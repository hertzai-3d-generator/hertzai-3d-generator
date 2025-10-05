# 1. Install MongoDB locally (if you don't have it)
# macOS: brew install mongodb-community
# Windows: Download from https://www.mongodb.com/try/download/community
# Linux: sudo apt-get install mongodb

# 2. Start MongoDB (in a separate terminal)
mongod

# 3. Navigate to your project root
cd hertza

# 4. Install backend dependencies
cd backend
npm install

# 5. Start the development server
npm run dev

# Your app will be available at: http://localhost:5000