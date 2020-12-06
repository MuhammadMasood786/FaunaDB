// Fifth Step


var faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();


(async () => {
    if (process.env.FAUNADB_ADMIN_SECRET) {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

        try {
            var result = await client.query(
                q.Create(
                    q.Collection('posts'), //collection name from  which we created in db-container.js file
                    { data: { title: 'This is first message' } }
                )

            );
            console.log("Single Collection", result.ref.id)
        }
        catch (error) {
            console.log('Unknown Error: ')
            console.log('Error ')
        }
    } else {
        console.log('No  FAUNADB_ADMIN_SECRET in .env file, skipping DB setup')
        console.log(result)
    }

})()