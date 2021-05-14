import dotenv from 'dotenv'
import { app } from "./app";

dotenv.config();

app.listen(process.env.PORT || 3333, () => console.log('running on port 3333'))