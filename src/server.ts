import { app } from "./app";

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`running on port ${port}`));
