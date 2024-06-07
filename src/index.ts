import express from 'express';
import "dotenv/config"
import './db';

import authRouter from '#/routes/auth';

const app = express();

//register our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter)
// khi nào có live server sẽ dùng cổng PORT nếu không thì dùng 2803
const PORT= process.env.PORT || 2803; 

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})