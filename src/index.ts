import express from 'express';
import './db';

const app = express();

const PORT= 2803; 

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})