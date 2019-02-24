import { Application, Request, Response } from "express";
import path from 'path';

module.exports = (app: Application) => {
    app.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../browser/index.html'));
    });
}
