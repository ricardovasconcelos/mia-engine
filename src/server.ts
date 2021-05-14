import dotenv from 'dotenv'
import { app } from "./app";

dotenv.config();

app.listen(3333, () => console.log('running on port 3333'))