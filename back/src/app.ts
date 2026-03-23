import express, { NextFunction, Request, Response } from 'express';
import cors from "cors";
import config from './config/config';
import { ApiError } from './errors/api.error';

const app = express();

app.use(cors())

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status).json({
        message: err.message,
        status: err.status
    })
})

app.listen(config.port, async () => {
    console.log(`Server has started on PORT ${config.port}`)
})