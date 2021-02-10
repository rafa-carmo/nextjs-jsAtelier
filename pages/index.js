
import Header from './components/header'
import Image from 'next/image'


export default function Home() {

  

  return (
    <div className="container">

      <title>Js Atelier</title>
      <Header />

      <div className="infoTop">
          <h2>Js</h2>
          <h2> Atelier</h2>
          <h3>Maquiadora Profissional</h3>
      </div>



    <div className="content">
      <div>
        <div className="infoWho">
        <h3>  Quem sou eu? </h3>
        <h5>{process.env.NEXT_PUBLIC_WHO_I}</h5>
        </div>

      <div></div>

        <div className="infoDescription">
        <p>{process.env.NEXT_PUBLIC_DESCRIPTION}</p>
        </div>

        <div>

        </div>
      </div>


        <ul>

            <li>
    

                  <div className="topNumber_1">

                    <div className="intoNumber_1">
                          <h3 className="number_1">01</h3> <p>Noivas</p>
                    </div>

     
                    </div>             
             

                  <div className="content1">
                    <p>{process.env.NEXT_PUBLIC_INFO1}</p>
                  </div>
                  
             <div className="image1">
                    <Image className="image1" src="/noiva.png" alt="Noivas" width={130} height={200} /> 
                    </div>
            </li>
            

            <li>
      <div className="image1">
                    <Image className="image1" src="/formanda.png" alt="Formandas" width={130} height={200} /> 
                    </div>
                  <div className="topNumber_1">

                    <div className="intoNumber_1">
                          <h3 className="number_1">02</h3> <p>Formandas </p>
                    </div>

     
                    </div>             
             

                  <div className="content1">
                    <p>{process.env.NEXT_PUBLIC_INFO1}</p>
                  </div>
                  
       
            </li>
            

            <li>
    

                  <div className="topNumber_1">

                    <div className="intoNumber_1">
                          <h3 className="number_1">03</h3> <p>Artísticas</p>
                    </div>

     
                    </div>             
             

                  <div className="content1">
                    <p>{process.env.NEXT_PUBLIC_INFO1}</p>
                  </div>
                  
             <div className="image1">
                    <Image className="image1" src="/artistica.png" alt="Noivas" width={130} height={200} /> 
                    </div>
            </li>
            

     
      </ul>
  </div>


    </div>
  )
}
