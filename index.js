// First Step


var faunadb = require('faunadb'),
    q = faunadb.query;
require('dotenv').config();

(async () => {
    if (process.env.FAUNADB_ADMIN_SECRET) {
        var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET })

        try {
            var result = await client.query(
                q.CreateDatabase({ name: 'myfirstdb' })
            );
            console.log(result)
        }
        catch (error) {
            if (error.requestResult.statusCode === 400 && error.message === "instance already exists!") {
                console.log("DB with this name already exists")
             }
             else{
                 console.log('Unknow Error: ')
                 console.log('Error ')
             }
        }
    } else{
        console.log('No  FAUNADB_ADMIN_SECRET in .env file, skipping DB setup')
        console.log(result)
    }

})()