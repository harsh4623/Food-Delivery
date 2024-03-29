const express = require('express');
const router = express.Router();
const { Organizations, Items, Pricings } = require('../db/models'); 

router.post('/organizations', async (req, res) => {
    try {
        const { name } = req.body;
        const newOrganization = await Organizations.create({ name });
        res.status(201).json(newOrganization);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/items', async (req, res) => {
    try {
        const { type, description } = req.body;
        const newItem = await Items.create({ type, description });
        res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/pricings', async (req, res) => {
    try {
        const { organizationId, itemId, zone, baseDistanceInKm, kmPrice, fixPrice } = req.body;
        const newPricing = await Pricings.create({ organizationId, itemId, zone, baseDistanceInKm, kmPrice, fixPrice });
        res.status(201).json(newPricing);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
