const userCardsData = require('../data/Cards');

const getListCards = async (req, res, next) => {
    try {
        const userCardId = req.params.id;
        const cards = await userCardsData.getUserCards(userCardId);
        res.send(cards)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getListCards
}
