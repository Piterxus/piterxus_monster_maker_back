/**
 * card router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::card.card');





// // src/api/card/routes/card.ts

import { factories } from '@strapi/strapi';

// Define las rutas predeterminadas (find, update) de Strapi
export default factories.createCoreRouter('api::card.card');

// Definir las rutas personalizadas
export const customRoutes = [
  {
    method: 'PUT',
    path: '/cards/:document_id/bulk-reserve', // Ruta personalizada
    handler: 'api::card.card.bulk-reserve', // Acción del controlador
    config: {
      auth: false,
    },
  },
];

// Registra las rutas personalizadas en la configuración del router
export const routes = [...customRoutes]; // Unifica las rutas predeterminadas y personalizadas
