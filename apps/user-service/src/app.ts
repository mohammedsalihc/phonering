import express from 'express';
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
        req.body = req.body || {};
        next();
 });
app.use('/user',user_routes)
app.get('/health', (req, res) => {
    res.send('Auth Service is running..');
});
app.use(ErrorHandler)
export default app;