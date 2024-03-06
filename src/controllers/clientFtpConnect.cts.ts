import { NextFunction, Request, Response } from "express";
import fs from 'fs';
import axios from "axios";

export async function GetVideo(req: Request, res: Response, next: NextFunction): Promise<void> {

    try {

        axios({
            method: "get",
            url: "http://localhost:3021/api/download",
            responseType: "stream"
        }).then(function (response) {
            response.data.pipe(fs.createWriteStream("ArchivoDescargado.zip"));       
        });
        
        res.status(200).json({
            ok: true,
            message: "Exitoso archivo guardado en la carpeta raiz" ,
        });

        return;
    } catch (err) {
        res.status(500).json({
            ok: false,
            message: "Error." + err,
        });
    }
};


