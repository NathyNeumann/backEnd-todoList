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
                    .input('cardTitle', sql.NVarChar(100), cardData.cardTitle)
                    .input('cardDescription', sql.NVarChar(500), cardData.cardDescription)
                    .input('createCardDate', sql.DateTime, cardData.createCardDate)
                    .input('ExecutionCardDate', sql.DateTime, cardData.ExecutionCardDate)
                    .input('userCardId', sql.Int, cardData.userCardId)
                    .query(sqlQueries.createCard);
        return card.recordset;
                    
    } catch (error) {
        return error.message
    }
}

module.exports = {
    getUserCards,
    createCard
}
