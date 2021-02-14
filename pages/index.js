
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

        <div className='contentWho'>
          <div className="infoWho">
          <h3>  Quem sou eu? </h3>
          <h5>{process.env.NEXT_PUBLIC_WHO_I}</h5>
          </div>


          <div className="infoDescription">
          <p>{process.env.NEXT_PUBLIC_DESCRIPTION}</p>
          </div>
        </div>
        <div>
      
  </div>


        <ul>

            <li>
    

                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">01</h3> <p>Noivas</p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{process.env.NEXT_PUBLIC_INFO1}</p>
                  </div>
                  
             <div className="imagePc">
                    <Image className="fileImage"  src="/noiva.png" alt="Noivas" width={130} height={215} /> 

                    </div>
            </li>
            

            <li>
      <div className="imagePc">
                    <Image className="fileImage"  src="/formanda.png" alt="Formandas" width={130} height={215} /> 
      </div>



                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">02</h3> <p>Formandas </p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{process.env.NEXT_PUBLIC_INFO1}</p>
                  </div>
                  
       
            </li>
            

            <li>
    

                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">03</h3> <p>Artísticas</p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{process.env.NEXT_PUBLIC_INFO1}</p>
                  </div>
                  
             <div className="imagePc">
                    <Image className="fileImage"  src="/artistica.png" alt="Noivas" width={130} height={215} /> 

                    </div>
            </li>
            

     
      </ul>
  </div>


    </div>
  

  )
}
