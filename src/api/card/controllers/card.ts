/**
 * card controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::card.card');

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::card.card', ({ strapi }) => ({
  async bulkReserve(ctx) {
    try {
      const { documentIds, productStatus } = ctx.request.body.data;

      if (!Array.isArray(documentIds) || documentIds.length === 0 || !productStatus) {
        return ctx.badRequest('Debe proporcionar un array de documentIds y un productStatus.');
      }

      // Usamos `findMany` con un filtro para obtener los documentos con los `documentIds` proporcionados
      const existingCards = await strapi.documents('api::card.card').findMany({
        filters: {
          documentId: { $in: documentIds }, // Asegúrate de que `documentId` sea un campo válido
        },
      });

      if (existingCards.length === 0) {
        return ctx.notFound('No se encontraron tarjetas con esos documentIds.');
      }

      // Actualizar los documentos encontrados
      const updatedCards = await Promise.all(
        existingCards.map(async (card) => {
          return await strapi.documents('api::card.card').update({
            documentId: card.documentId, // Asegúrate de usar el `documentId` correcto
            data: { productStatus },
          });
        })
      );

      ctx.send({
        message: 'Tarjetas actualizadas exitosamente',
        updatedCards,
      });
    } catch (error) {
      console.error(error);
      ctx.internalServerError('Error al actualizar las tarjetas');
    }
  },
}));






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

