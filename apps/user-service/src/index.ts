import app from './app';
import { connectDB } from './database/mongo';
import { connectNATS } from './utils/nats';

const port = process.env.PORT || 4001;

const start = async () => {
   console.log('STARTING USER SERVICE...');
  await connectDB();  
  await connectNATS()
  app.listen(port, () => {
    console.log(`User Service is running on port ${port}`);
  });      
}

start()