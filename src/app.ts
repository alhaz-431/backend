import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; 

import router from "./routes";
import { notFound } from "./middlewares/notFound";
import { errorHandler } from "./middlewares/globalErrorHandler";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser()); 


app.use(cors({
  origin: ['http://localhost:3000'], 
  credentials: true, 
}));

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Apollo Gears World!");
});

app.use(errorHandler);
app.use(notFound);

export default app;