import connectToDatabase from '../common/db'

export default async ( request, response ) => {

    
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection('info')
    
    
    
    await collection.insertOne({
        name: "Js /n Atelier",
        sub: "Maquiadora Profissional",
        whoI: "Maquiadora profissional, professora de maquiagem.....",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis tristique fermentum. Morbi quis dolor urna. Etiam nibh nisi, finibus nec urna a, molestie volutpat orci.",
        title1: "Noivas",
        content1: "Pellentesque dolor enim, rhoncus vitae ligula at, pharetra tincidunt est. Praesent at neque urna. Quisque suscipit elementum luctus. Vestibulum ante ipsum primis in faucibus orci luctus et",
        title2: "Formandas",
        content2: "Pellentesque dolor enim, rhoncus vitae ligula at, pharetra tincidunt est. Praesent at neque urna. Quisque suscipit elementum luctus. Vestibulum ante ipsum primis in faucibus orci luctus e",
        title3: "Artísticas",
        content3: "Pellentesque dolor enim, rhoncus vitae ligula at, pharetra tincidunt est. Praesent at neque urna. Quisque suscipit elementum luctus. Vestibulum ante ipsum primis in faucibus orci luctus e",
        bgColor: "#FFFFFF",
        urlImage1: "https://i.ibb.co/CJz3FD7/noiva.png",
        urlImage2: "https://i.ibb.co/v1cYjcN/formanda.png",
        urlImage3: "https://i.ibb.co/3sxG9T1/artistica.png"
        })

        return response.status(200).json({message: "OK"})

}