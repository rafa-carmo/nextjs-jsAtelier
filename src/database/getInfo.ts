import connectToDatabase from "../../utils/mongo"



export default async () => {

    
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('info')
    const data = collection.find({}).toArray()

    return data
}