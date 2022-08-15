const utils = require('../utils');
const config = require('../../../dbconfig');
const sql = require('mssql');

const getUserCards = async (userId) => {
    try {
        let pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Cards');
        let list = await pool.request()
                    .input('UserCardId', sql.Int, userId)
                    .query(sqlQueries.cardsList);
        return list.recordset;

    } catch (error) {
        return error.message;
    }
}

const createCard = async (cardData) =>{
    try {
        let pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Cards');
        let card = await pool.request()
                    .input('cardTitle', sql.NVarChar(100), cardData.CardTitle)
                    .input('cardDescription', sql.NVarChar(500), cardData.CardDescription)
                    .input('createCardDate', sql.DateTime, cardData.CreateCardDate)
                    .input('ExecutionCardDate', sql.DateTime, cardData.ExecutionCardDate)
                    .input('UserCardId', sql.Int, cardData.UserCardId)
                    .query(sqlQueries.createCard);
        return card.recordset;
                    
    } catch (error) {
        return error.message
    }
}

const getOneCard = async (CardId) => {
    try {
        let pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Cards');
        let card = await pool.request()
                    .input('CardId', sql.Int, CardId)
                    .query(sqlQueries.readCard);
        return card.recordset;

    } catch (error) {
        return error.message;
    }
}

const updateCard = async (CardId, CardData) => {
    try {
        let pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Cards');
        let cardUpdate = await pool.request()
                    .input('CardTitle', sql.NVarChar(100), CardData.CardTitle)
                    .input('CardDescription', sql.NVarChar(500), CardData.CardDescription)
                    .input('ExecutionCardDate', sql.DateTime, CardData.ExecutionCardDate)
                    .input('CreateCardDate', sql.DateTime, CardData.CreateCardDate)
                    .input('CardId', sql.Int, CardId)
                    .query(sqlQueries.updateCard);
        return cardUpdate.recordset;
        
    } catch (error) {
        return error.message;
    }
}

const deleteCard = async (CardId) => {
    try {
        const pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Cards');
        const deleteCard = await pool.request()
                        .input('CardId', sql.Int, CardId)
                        .query(sqlQueries.deleteCard);
        return deleteCard.recordset;
        
    } catch (error) {
        return error.message
    }
}

module.exports = {
    getUserCards,
    createCard, 
    getOneCard,
    updateCard,
    deleteCard
}
