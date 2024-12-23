/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = 'Something went wrong';

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || message,
    error: err,
  });
};
