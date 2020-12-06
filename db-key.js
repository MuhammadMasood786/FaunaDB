// Second Step


var faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();


(async () => {
    if (process.env.FAUNADB_ADMIN_SECRET) {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

        try {
            var result = await client.query(
                q.CreateKey({
                    database: q.Database('myfirstdb'),    //DB Name
                    role: 'server'
                })
            );
            console.log("Save the DB ServerKey", result.secret)
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