// Tenth Step


var faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();


(async () => {
    if (process.env.FAUNADB_ADMIN_SECRET) {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

        try {
            var result = await client.query(
                q.Replace(
                    q.Ref(
                        q.Collection('posts'),
                        '283458620343978501'
                    ),
                    { data: { title: 'Wtf, fourth message' } }
                )
            );
            console.log("Document retreive from container in DB " + " " + result.ref.id + " " + result.data.title)

        }
        catch (error) {
            console.log('Error : ', error)
        }
    } else {
        console.log('No  FAUNADB_ADMIN_SECRET in .env file, skipping DB setup')
        console.log(result)
    }

})()