

export default{
    routes: [
        {
            method: 'PUT',
            path: '/card/bulk-reserve', // Ruta personalizada
            handler: 'card.bulkReserve', // Acción del controlador
            config: {
              auth: false,
            },
          },
          {
            method: 'GET',
            path: '/card/test',
            handler: 'card.test',
            config: {
              policies: [],
              auth:false
            },
           
          },
    ],
}