/**
 * card controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::card.card');

/**
 * card controller
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::card.card', ({ strapi }) => ({
//     async reserve(ctx) {
//       const { id } = ctx.params;
  
//       try {
//         // Busca la tarjeta por su ID
//         const card = await strapi.entityService.findOne('api::card.card', id);
  
//         // Verifica si la tarjeta existe y tiene la propiedad 'productStatus'
//         if (!card || !card.productStatus) {
//           return ctx.notFound('Producto no encontrado o no tiene un estado definido.');
//         }
  
//         // Verifica si el producto está disponible
//         if (card.productStatus !== 'available') {
//           return ctx.badRequest('El producto no está disponible.');
//         }
  
//         // Actualiza el estado del producto a 'reserved'
//         const updatedCard = await strapi.entityService.update('api::card.card', id, {
//           data: { productStatus: 'reserved' }, // Asegúrate de usar el nombre del campo correcto
//         });
  
//         return ctx.send({
//           message: 'Producto reservado con éxito.',
//           card: updatedCard,
//         });
//       } catch (error) {
//         console.error(error);
//         return ctx.internalServerError('Error al reservar el producto.');
//       }
//     },
//   }));

