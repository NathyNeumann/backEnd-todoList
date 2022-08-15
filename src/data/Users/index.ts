import * as utils from '../utils';
import config from '../../../dbconfig';
import sql from 'mssql';

interface Users {
    fullName: string;
    birth: string;
    RegisterNumber: string;
    id: number;
}

export const getUsers = async () :Promise<Users[]> => {
    try {
        let pool = await sql.connect(config);
        const sqlQueries = await utils.loadeSQLQueries('Users');
        let list = await pool.request().query(sqlQueries.usersList);
        return list.recordset;
        
    } catch (error: any) {
        return error.message;
    }
}

