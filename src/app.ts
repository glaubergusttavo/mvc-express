import express, { Request, Response } from "express"
import usersRouter from "./router/users";
import carsRouter from "./router/cars";


const app = express();
app.use(express.json());
app.use(express.static(__dirname+'/view'))
app.use(usersRouter)
app.use(carsRouter)

app.get("/test", function(req: Request, res: Response){
    return res.status(201).json({message: "Message"})
})

export default app;
