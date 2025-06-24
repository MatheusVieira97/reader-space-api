import cors from 'cors';

const getCorsOrigins = (): string[] => {
  const envOrigins = process.env.CORS_ORIGINS;

  if (envOrigins) {
    return envOrigins.split(',').map((origin) => origin.trim());
  }

  return [];
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
