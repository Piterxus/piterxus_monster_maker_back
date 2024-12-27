

export default{
    routes: [
        {
            method: 'PUT',
            path: '/custom/:document_id/bulk-reserve', // Ruta personalizada
            handler: 'card.bulkReserve', // Acción del controlador
            config: {
              auth: false,
            },
          },
          {
            method: 'GET',
            path: '/custom/test',
            handler: 'card.test',
            config: {
              policies: [],
              auth:false
            },
           
          },
    ],
}