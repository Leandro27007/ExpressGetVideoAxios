import { Application } from "express";
import UploadPlayList from "./uploadPlayList.rts";

export default class Routes {
    constructor(app: Application) {
        app.use("/api", UploadPlayList);
    }
}