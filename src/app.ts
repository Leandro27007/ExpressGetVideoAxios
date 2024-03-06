import express, { Application } from "express";
import Routes from "./routes";
import cors, { CorsOptions } from "cors";
import env from "dotenv"

env.config();

const app: Application = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

new Routes(app);

const corsOptions: CorsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app
    .listen(PORT, "localhost", function () {
        console.log(`Running on port ${PORT}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });