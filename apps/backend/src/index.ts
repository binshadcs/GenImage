import express, { Request, Response } from "express";
import { GenerateImage, GenerateImageFromPack, TrainModel } from "common/types";

const app = express();

const PORT = process.env.PORT || 3000;

app.post("/ai/training", (req: Request, res: Response) => {
  res.send("Training end point");
});

app.post("/ai/generate", (req: Request, res: Response) => {
  res.send("Generate end point");
});

app.post("/pack/generate", (req: Request, res: Response) => {
  res.send("Pack generate end point");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Server is up!");
});

app.get("/pack/bulk", (req: Request, res: Response) => {
  res.send("Bulk pack end point");
});

app.get("/image", (req: Request, res: Response) => {
  res.send("Get image");
});

app.listen(3001, () => {
  console.log(`Server is running ${PORT}`);
});