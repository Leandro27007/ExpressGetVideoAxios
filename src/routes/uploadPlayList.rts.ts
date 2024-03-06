import { Router } from "express";

import { GetVideo } from "../controllers/clientFtpConnect.cts";

class UploadPlayList {
    router = Router();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {
        this.router.get("/GetVideo", GetVideo );
    }
}

export default new UploadPlayList().router;