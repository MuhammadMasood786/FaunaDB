// Nineth Step


var faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();


(async () => {
    if (process.env.FAUNADB_ADMIN_SECRET) {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

        try {
            var result = await client.query(
                q.Update(
                    q.Ref(
                        q.Collection('posts'),
                        '283458088447508993'
                    ),
                    {data:{title:'First message'}}
                )
                );
            console.log("Value retreive by reference ", result.data.title)
            // result.data.title.map(t=>console.log(t))
        }
        catch (error) {
            console.log('Error : ', error)
        }
    } else {
        console.log('No  FAUNADB_ADMIN_SECRET in .env file, skipping DB setup')
        console.log(result)
    }

})()