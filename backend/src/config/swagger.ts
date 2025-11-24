import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Project Management API',
    version: '1.0.0',
    description: 'API de gestión de proyectos, tareas y colaboradores',
  },
  servers: [
    {
      url: 'http://localhost:5000/api',
      description: 'Servidor local',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};

const options: swaggerJSDoc.Options = {
  swaggerDefinition,
  apis: ['src/modules/**/*.routes.ts', 'src/modules/**/*.controller.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
