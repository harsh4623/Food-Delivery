// index.js
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swaggerConfig');
const pricingRoutes = require('./routes/pricing');
const apiRoutes = require('./routes/apiRoutes');
// const foodDeliveryRoutes = require('./routes/foodDelivery');

const app = express();

app.use(express.json());

// Define routes
app.use('/pricing', pricingRoutes);
// app.use('/food-delivery', foodDeliveryRoutes);

app.use('/api', apiRoutes);

// // Setup Swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
