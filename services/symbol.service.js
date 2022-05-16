module.exports = {
    searchSymbol: (type) => {
        let headers = {
            "content-type": "application/json"
        };
        return new Promise((resolve, reject) => {

                const body={symbol:type,price:1245};
                
                    resolve(body);
               
        })

    },
};