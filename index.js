import express from "express";
import router from "./controller";
const app = express();

app.use("/api", router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Appp listening to ${PORT}`));
export default app;
