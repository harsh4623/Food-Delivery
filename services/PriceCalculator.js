
const { Pricing, Item } = require('../db/models'); 

const calculateTotalPrice = async (zone, organizationId, totalDistance, itemType) => {
    try {
        // Fetch base price and per km price from Pricing model
        const pricing = await Pricing.findOne({
            where: {
                organizationId: organizationId,
                zone: zone
            }
        });
        if (!pricing) {
            throw new Error('Pricing not found');
        }

        // Fetch item details based on itemType
        const item = await Item.findOne({
            where: {
                type: itemType
            }
        });

        if (!item) {
            throw new Error('Item not found');
        }

        // Calculate total price based on pricing rules and item details
        let totalPrice = pricing.fixPrice; // Initialize with base price
        if (totalDistance > pricing.baseDistanceInKm) {
            const additionalDistance = totalDistance - pricing.baseDistanceInKm;
            const perKmPrice = item.type === 'perishable' ? 150 : 100;
            totalPrice += additionalDistance * perKmPrice;
        }


        return totalPrice;
    } catch (error) {
        console.error('Error calculating price:', error);
        throw error; // Propagate the error for handling in the route
    }
};

module.exports = { calculateTotalPrice };
