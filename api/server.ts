import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.DEV_PORT || 3000;

app.listen(port, () =>
  console.log(`Listening on localhost:${port}`)
);
