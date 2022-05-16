const { response } = require('express');
const { all } = require('../routes');

var faunadb = require('faunadb'),
q = faunadb.query
module.exports = {
    getAllUsers:  (type) => {
        let headers = {
            "content-type": "application/json"
        };
        return new Promise( async (resolve, reject) => {

            var client = new faunadb.Client({ secret:'fnAElzr85hAASaX-JuUc2Y1MRtwKO6OXu07W5hQd' ,domain: "db.us.fauna.com"})
    
           
           
            let allDocuments = await client.query(
                q.Map(
                  q.Paginate(q.Documents(q.Collection('users'))),
                  q.Lambda((user) => q.Get(user)
                )
              )
            ) ;
            let filteredDocumnets=[];             
            allDocuments.data.forEach(element => {
                filteredDocumnets.push(element.data);
            });

           
            resolve(filteredDocumnets);
            
                
             
            
                
                    
               
        })

    },
};