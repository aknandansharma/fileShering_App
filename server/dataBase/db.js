import mongoose from 'mongoose'

const DBConnection = () => {
    const MONGO_URL = `mongodb+srv://aknandan:aknandan@cluster0.xouekyr.mongodb.net/`
    try {
        mongoose.connect(MONGO_URL, {useNewUrlParser: true})
        console.log('DataBase Connected successfully')
    } catch (error) {
        console.log(error.message);
    }
}

export default DBConnection;