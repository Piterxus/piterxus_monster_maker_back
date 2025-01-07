

export default{
    routes: [
        {
            method: 'PUT',
            path: '/card/bulk-update', // Ruta personalizada
            handler: 'card.bulkUpdate', // Acción del controlador
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