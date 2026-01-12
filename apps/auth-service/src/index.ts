import dotenv from 'dotenv';
dotenv.config();    
import app from './app';
import { connectDB } from './database/mongo';

const port = process.env.PORT || 4000;

const start = async () => {
  await connectDB();  
  app.listen(port, () => {
    console.log(`Auth Service is running on port ${port}`);
  });      
}


start()