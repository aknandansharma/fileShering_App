import express from 'express';
import router from './routes/router.js';
import cors from 'cors'
import DBConnection from './dataBase/db.js';
import path from 'path'


// inti
const app = express();

//cors
app.use(cors());

// create route
app.use('/', router)
app.use(express.static(path.join(__dirname, '../client/build')))

// function to get all data from database
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// database
DBConnection();


// intlize PORT
const port = 8080;
// listen PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});