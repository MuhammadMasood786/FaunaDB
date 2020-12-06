// Fourth Step


var faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();


(async () => {
    if (process.env.FAUNADB_ADMIN_SECRET) {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

        try {
            var result = await client.query(
                q.CreateIndex({
                    name: 'post_by_title',
                    source: q.Collection('posts'),  // collection name from  which we created in db-container.js file
                    terms: [{ field: ['data', 'title'] }]
                })
            );
            console.log("Index Created : ",result.name)
        }
        catch (error) {
            console.log('Unknow Error: ')
            console.log('Error ')
        }
    } else {
        console.log('No  FAUNADB_ADMIN_SECRET in .env file, skipping DB setup')
        console.log(result)
    }

})()