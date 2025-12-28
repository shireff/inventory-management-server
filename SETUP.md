# MongoDB Setup Guide

The application has been converted to use MongoDB exclusively. Prisma has been removed.

## 1. Environment Setup
Ensure your `.env` file contains your MongoDB connection string:

```env
MONGO_URL="mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/myDatabase?retryWrites=true&w=majority"
```

## 2. Running the Server
Install dependencies (if not already done) and start the server:

```bash
npm install
npm run dev
```

## 3. API Endpoints
The following endpoints are now powered by MongoDB:
- `GET /dashboard` - Dashboard metrics
- `GET /products` - List all products
- `POST /products` - Create a new product
- `GET /users` - List all users
- `GET /expenses` - Expense summaries

## Notes
- The database models are located in `src/models/`.
- All Prisma-related files and scripts have been removed.
