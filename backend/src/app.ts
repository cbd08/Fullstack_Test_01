import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

dotenv.config();

const app: Application = express();

const allowedOrigins = [
  process.env.CORS_ORIGIN || 'http://localhost:5173', 
  'http://localhost:5173', 
  'https://yet-another-domain.net'
];

// Middlewares globales
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Healthcheck simple
app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', routes);

export default app;
