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
const getACard = async (req, res) => {
    try {
        const CardId = req.params.id;
        const card = await userCardsData.getOneCard(CardId);
        res.send(card)
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const updateACard = async (req, res) => {
    try {
        const CardId = req.params.id;
        const data = req.body
        const card = await userCardsData.updateCard(CardId, data);
        res.send(card)
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const deleteCard = async (req, res) => {
    try {
        const CardId = req.params.id;
        const deletedCard = await userCardsData.deleteCard(CardId);
        res.send(deletedCard)
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getListCards,
    postCreateCard,
    getACard,
    updateACard,
    deleteCard
}
