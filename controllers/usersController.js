const usersService=require("../services/users.service");

module.exports = {
    getAllUsers: (req, res) => {
       
        usersService.getAllUsers().then((data) => {
                res.send(data);
            }).catch((err) => {
                res.send(err.message);
            });
        }
    };

