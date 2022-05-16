const symbolSerachService=require("../services/symbol.service");

module.exports = {
    searchSymbol: (req, res) => {
       
        symbolSerachService.searchSymbol('ADWL').then((data) => {
                res.send(data);
            }).catch((err) => {
                res.send(err.message);
            });
        }
    };


 