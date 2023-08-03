import express from 'express';
import router from './routes/router.js';
import cors from 'cors'
import DBConnection from './dataBase/db.js';


// inti
const app = express();

//cors
app.use(cors());

// create route
app.use('/', router)


// database
DBConnection();


// intlize PORT
const port = 8080;
// listen PORT
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});