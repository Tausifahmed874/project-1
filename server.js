import express from 'express';
import 'dotenv/config';



// // Import routes
import productRouter from './routers/productRoutes.js';
import { connectDB } from './db.js';


const server = express();
connectDB();

server.use(express.json());

// Use routes
server.use('/api/products', productRouter);





server.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });

});

// const PORT = process.env.PORT || 8080;

server.listen(8080, () => {
  console.log(`Server is running on port`);
});