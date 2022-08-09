const utils = require('../utils');
const config = require('../../dbconfig');
const sql = require('mssql');

const getUserCards = async () => {
    try {
        let pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Cards');
        let list = await pool.request().query(sqlQueries.cardsList);
        return list.recordset;
        
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUserCards
}
