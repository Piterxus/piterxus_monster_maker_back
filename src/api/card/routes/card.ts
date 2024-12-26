/**
 * card router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::card.card');





// // src/api/card/routes/card.ts

// import { factories } from '@strapi/strapi';

// // Define las rutas predeterminadas (find, update) de Strapi
// export default factories.createCoreRouter('api::card.card', {
//   only: ['find', 'findOne', 'update'], // Solo las rutas predeterminadas 'find' y 'update'
//   config: {
//     find: {
//       auth: false,
//     },
//     update: {
//       auth: false,
//     },
//   },
// });

// // Definir las rutas personalizadas
// export const customRoutes = [
//   {
//     method: 'PUT',
//     path: '/cards/:id/reserve', // Ruta personalizada
//     handler: 'api::card.card.reserve', // Acción del controlador
//     config: {
//       auth: false,
//     },
//   },
// ];

// // Registra las rutas personalizadas en la configuración del router
// export const routes = [...customRoutes]; // Unifica las rutas predeterminadas y personalizadas
