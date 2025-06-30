import express, {Request, Response} from "express"
import mainRouter from "./routes";
import { PORT } from "./.config";
const app:any = express()


app.use(express.json())

app.use("/", mainRouter)

app.listen(3009, ()=>console.log(`port is running successfully at port ${PORT}`))