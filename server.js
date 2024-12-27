import express from 'express';
import bodyParser from 'body-parser';
import users from './src/routes/userRoutes.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/users', users);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something is broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});