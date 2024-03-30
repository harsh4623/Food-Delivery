// const swaggerOptions = {
//   definition: {
//       openapi: '3.0.0',
//       info: {
//           title: 'Food Delivery API',
//           version: '1.0.0',
//           description: 'API for food delivery service with dynamic pricing',
//       },
//   },
//   apis: ['./routes/*.js'], // Include all route files
// };

// module.exports = swaggerOptions;
const swaggerOptions = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'Pricing API',
          version: '1.0.0',
          description: 'API for calculating delivery costs with dynamic pricing',
      },
      servers: [
          {
              url: 'https://food-delivery-c7oa.onrender.com/api-docs', // Replace with your actual server URL
          },
      ],
  },
  apis: ['./routes/*.js'], // Include all route files
};

module.exports = swaggerOptions;
