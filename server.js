import express from 'express';
import postRoute from './src/routes/post.router.js';
import userRoute from './src/routes/user.router.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3030;
// const port = 3030;


app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/post', postRoute);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something is broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});