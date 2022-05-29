const axios = require("axios");

module.exports = {
    searchSymbol: (config) => {

        return new Promise((resolve, reject) => {

            axios.request(config).then((data) => {
                // console.log(data.data)
                resolve(data.data);
            }).catch((err) => {
                console.log(err)
                reject(err);
            });


        })

    },
};