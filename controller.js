import Router from "express";

const mainRouter = Router();

mainRouter.get("/welcome", (req, res) => {
  return res.json({
    message: "Welcome",
  });
});
export default mainRouter;
