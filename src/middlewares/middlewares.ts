// middlewares.ts
import { RequestHandler } from "express";

export const middleware: RequestHandler = (req, res, next) => {
  try {
    res.send("Hello World!");
    console.log("Response sent");
  } catch (error) {
    next(error as Error);
  }
};
