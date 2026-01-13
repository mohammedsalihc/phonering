import dotenv from 'dotenv';
dotenv.config();    
import app from './app';
import { connectDB } from './database/mongo';
import { connectNATS } from './utils/nats';

const port = process.env.PORT || 4000;

const start = async () => {
  console.log('calling index')
  await connectDB();  
  await connectNATS()
  app.listen(port, () => {
    console.log(`Auth Service is running on port ${port}`);
  });      
}


start()