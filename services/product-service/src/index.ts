import express, { Request, Response, NextFunction } from 'express';
import productRoutes from './routes/product.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());
app.use('/product', productRoutes);


// global error handler as the last middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Product Server is running on port ${PORT}`);
});