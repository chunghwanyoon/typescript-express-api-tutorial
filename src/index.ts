/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 * App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/**
 * Webpack HMR Activation
 */
