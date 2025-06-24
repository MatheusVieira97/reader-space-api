import cors from 'cors';

const getCorsOrigins = (): string[] => {
  const envOrigins = process.env.CORS_ORIGINS;
  const isDevelopment = process.env.NODE_ENV === 'development';

  const developmentOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'http://localhost:8080',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:8080',
  ];

  if (envOrigins) {
    const origins = envOrigins.split(',').map((origin) => origin.trim());
    if (isDevelopment) {
      return [...new Set([...developmentOrigins, ...origins])];
    }
    return origins;
  }

  return isDevelopment ? developmentOrigins : [];
};

const allowedOrigins = getCorsOrigins();

export const corsOptions: cors.CorsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200,
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`CORS blocked request from origin: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
};

export default cors(corsOptions);
