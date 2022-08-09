const utils = require('../utils');
const config = require('../../../dbconfig');
const sql = require('mssql');

const getUsers = async () => {
    try {
        let pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Users');
        let list = await pool.request().query(sqlQueries.usersList);
        return list.recordset;
        
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers
}
