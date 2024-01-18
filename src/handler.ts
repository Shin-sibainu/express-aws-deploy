//https://zenn.dev/mistletoe/books/93f5810c20eb9a/viewer/052516
import serverlessExpress from "@vendia/serverless-express";
// import serverless from "serverless-http";
import express from "express";
const app = express();
import { todoRoutes } from "./routes/todoRoutes";

app.use("/todos", todoRoutes);

app.get("/", (_req, res, _next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/path", (_req, res, _next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((_req, res, _next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

// module.exports.handler = serverless(app);
export const handler = serverlessExpress({ app });
