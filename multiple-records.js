// Sixth Step


var faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();


(async () => {
    if (process.env.FAUNADB_ADMIN_SECRET) {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

        try {
            var result = await client.query(
                q.Map(
                    [
                        'Second message',
                        'Third message',
                        'Four message',
                    ],
                    q.Lambda(
                        'post_title',
                        q.Create(
                            q.Collection('posts'),
                            { data: { title: q.Var('post_title') } }
                        )
                    )
                )
            );
            console.log("Single Collection", result.length)
            result.map(r => console.log(r.ref.id))
        }
        catch (error) {
            console.log('Error : ',error)
        }
    } else {
        console.log('No  FAUNADB_ADMIN_SECRET in .env file, skipping DB setup')
        console.log(result)
    }

})()