const symbolSerachService = require("../services/symbol.service");
const apiConfigService = require("../services/apiconfig.service");

module.exports = {
    searchHistoricalSymbol: (req, res) => {
        // console.log(req.query.symbol)
        apiConfigService.getAPIConfig('historical').then((configData) => {
            // res.send(data);
            // console.log(configData);
            const configList = configData.body;
            configList.forEach(function (config) {
                if (config.data.body.params.Symbol === req.query.symbol) {
                    symbolSerachService.searchSymbol(config.data.body).then((data) => {
                        res.send(data);
                    }).catch((err) => {
                        res.send(err.message);
                    });
                }
            })
        }).catch((err) => {
            res.send(err.message);
        });

    },
    searchLiveSymbol: (req, res) => {
        // console.log(req.query.symbol)
        
        apiConfigService.getAPIConfig('live').then((configData) => {
            // res.send(data);
            // console.log(configData);
            const configList = configData.body;
            configList.forEach(function (config) {
                if (config.data.body.params.Symbol === req.query.symbol) {
                    symbolSerachService.searchSymbol(config.data.body).then((data) => {
                        res.send(data);
                    }).catch((err) => {
                        res.send(err.message);
                    });
                }
            })
        }).catch((err) => {
            res.send(err.message);
        });

    }
};


