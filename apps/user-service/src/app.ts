import express from 'express';
import cors from 'cors';
import user_routes from './modules/user/user.routes'
import { ErrorHandler } from './middlewares/error.middleware';
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
        req.body = req.body || {};
        next();
 });
app.use('/user',user_routes)
app.get('/health', (req, res) => {
    res.send('User Service is running..');
});
app.use(ErrorHandler)
export default app;