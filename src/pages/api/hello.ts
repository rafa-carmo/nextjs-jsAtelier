import connectToDatabase from '../../../utils/mongo';

export default async (req, res) => {

  const db = await connectToDatabase(process.env.MONGODB_URI)
  const collection = db.collection('info')
  const data = collection.find({}).toArray().then(data => res.status(200).json({data})) 
}
