import { Response, Request } from 'express';
import  * as usersData from '../data/Users';

export const getListUsers = async (req: Request, res: Response, ) => {
    try {
        const users = await usersData.getUsers();
        res.send(users);
    } catch (error: any) {
        res.status(404).send(error.message)
    }
}
