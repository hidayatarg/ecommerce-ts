// Global error handler middleware
// The global error handler middleware is a special middleware that is used to handle errors that occur during the request processing pipeline. It is added as the last middleware in the middleware chain. If an error occurs in any of the previous middlewares or route handlers, the error is passed to the global error handler middleware for handling.
import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}