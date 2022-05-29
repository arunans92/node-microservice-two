const apiConfigService = require("../services/apiconfig.service");

module.exports = {
    getAllConfig: (req, res) => {

        apiConfigService.getAPIConfig('all').then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err.message);
        });
    },
    getHistoricalConfig: (req, res) => {

        apiConfigService.getAPIConfig('historical').then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err.message);
        });
    },
    getLiveConfig: (req, res) => {

        apiConfigService.getAPIConfig('live').then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err.message);
        });
    }
};

