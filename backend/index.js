import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import connectDB from './utils/db.js';
import bodyParser from 'body-parser';


const { urlencoded } = express;
const app = express();
dotenv.config({});
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'yes!!',
        success: true
    });
});

// middlewares
app.use(express.json());
app.use(urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

app.use(cors(corsOptions));

//apis will fetch here
app.use('/user', userRoute);
const PORT = 8080;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server Listen at port ${PORT}`);
});
