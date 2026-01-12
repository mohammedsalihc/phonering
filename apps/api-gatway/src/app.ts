import express from 'express';
import cors from 'cors';
import authMiddleware from './middlewares/auth.middlewares';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', authMiddleware, (req, res) => {
  res.json({ status: 'API Gateway is running' });
});

export default app;
