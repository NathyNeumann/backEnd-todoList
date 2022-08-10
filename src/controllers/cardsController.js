const userCardsData = require('../data/Cards');

const getListCards = async (req, res) => {
    try {
        const userCardId = req.params.id;
        const cards = await userCardsData.getUserCards(userCardId);
        res.send(cards)
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const postCreateCard = async (req, res) => {
    try {
        const data = req.body;
        const cardPosted = await userCardsData.createCard(data);
        res.send(cardPosted);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports = {
    getListCards,
    postCreateCard
}
