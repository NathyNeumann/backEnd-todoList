const usersData = require('../data/Users');

const getListUsers = async (req, res, next) => {
    try {
        const users = await usersData.getUsers();
        res.send(users)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getListUsers
}
