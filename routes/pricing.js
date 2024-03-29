
const express = require('express');
const { calculateTotalPrice } = require('../services/PriceCalculator');

const router = express.Router();

/**
 * @swagger
 * /pricing/calculate:
 *   post:
 *     summary: Calculate total price
 *     description: Calculate the total price for delivery based on input parameters.
 *     tags:
 *       - Pricing
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *               organizationId:
 *                 type: string
 *               totalDistance:
 *                 type: number
 *               itemType:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response with total price.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *       400:
 *         description: Bad request if parameters are missing or invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

router.post('/calculate', async (req, res) => {
    const { zone, organizationId, totalDistance, itemType } = req.body;
    try {
        const totalPrice = await calculateTotalPrice(zone, organizationId, totalDistance, itemType);
        res.json({ total_price: totalPrice });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
