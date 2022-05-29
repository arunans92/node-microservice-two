const { response } = require('express');
const { all } = require('../routes');

const faunadb = require('faunadb')
const q = faunadb.query

module.exports = {
    getAPIConfig: (type) => {
        return new Promise(async (resolve, reject) => {

            const client = new faunadb.Client({
                secret: process.env.FAUNADB_SERVER_SECRET,
                domain: "db.us.fauna.com"
            })

            let data = client
                .query(q.Paginate(q.Match(q.Ref('indexes/apiconfigs'))))
                .then((response) => {
                    const dataRefs = response.data
                    const getAllDataQuery = dataRefs.map((ref) => {
                        return q.Get(ref)
                    })
                    return client.query(getAllDataQuery).then((ret) => {
                        const filterData = [];
                        ret.map((resData) => {
                            const urlSplit = resData.data.body.url.split('/');
                            if (type === 'live' && urlSplit[urlSplit.length - 1] === 'stock-metadata') {
                                filterData.push(resData);
                            }
                            if (type === 'historical' && urlSplit[urlSplit.length - 1] === 'stock-prices') {
                                filterData.push(resData);
                            }
                        });
                        let uniqueObjArray = [
                            ...new Map(filterData.map((fData) => [fData.data.body.params.Symbol, fData])).values(),
                        ];
                        console.log(`${uniqueObjArray.length} found`)
                        return {
                            statusCode: 200,
                            body: type === 'all' ? ret : uniqueObjArray
                        }
                    })
                }).catch((error) => {
                    console.log('error', error)
                    return {
                        statusCode: 400,
                        body: error
                    }
                })

            resolve(data);

        })

    }
};