import { MongoClient, Db} from 'mongodb'
import url from 'url'


let cacheDb = null


async function connectToDatabase(uri){

    if(cacheDb) {
        return cacheDb
    }


    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const dbName = url.parse(uri).pathname.substr(1)

    const db = client.db(dbName)

    cacheDb = db
    return db
}



export default async ( request, response ) => {

    const db = await connectToDatabase(process.env.MONGODB_URI)


    const collection = db.collection('info')



    const data = collection.find({}).toArray().then(data => response.status(200).json({data})) 


}