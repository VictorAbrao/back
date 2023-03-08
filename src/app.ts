import express from "express";
import { createConnection } from "typeorm";
import { cardsRoutes } from "./routes/cardsRoutes";
import { loginRoutes } from "./routes/loginRoutes";
import { env } from "./config/env";

createConnection().then(() => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  app.use(loginRoutes);
  app.use(cardsRoutes);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});



