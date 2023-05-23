import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

connectDB();

//esmodule
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest objects
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, './client/build')))


//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);
ap
// REST API
app.use('*', function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})
// app.get('/',(req,res) => {
//     res.send('<h3>Re-commmercio <sub>An e-commerce website with recommendation system<sub><h3>')
// })

const PORT = process.env.PORT || 8080; 

app.listen(PORT, () => {
    console.log(`App is Working Budddy on ${process.env.DEV_MODE} mode on ${PORT}`.bgGreen)
});
