
import Header from './components/header'
import Image from 'next/image'
import axios from 'axios'
import {GetStaticsProps} from 'next'






export default function Home({info}) {

  return (
    <div className="container">

      <title>{info.name}</title>
      <Header />

      <div className="infoTop">
        <center>
          <h2>{info.name}</h2>
          </center>
          <h3>{info.sub}</h3>
      </div>





    <div className="content">

        <div className='contentWho'>
          <div className="infoWho">
          <h3>  Quem sou eu? </h3>
          <h5>{info.whoI}</h5>
          </div>


          <div className="infoDescription">
          <p>{info.detail}</p>
          </div>
        </div>
        <div>
      
  </div>


        <ul>

            <li>
    

                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">01</h3> <p>{info.title1}</p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{info.content1}</p>
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
                          <h3 className="number">02</h3> <p>{info.title2} </p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{info.content2}</p>
                  </div>
                  
       
            </li>
            

            <li>
    

                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">03</h3> <p>{info.title3}</p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{info.content3}</p>
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


export async function getStaticProps(context) {

  const server = process.env.NEXT_PUBLIC_SERVER

  const response = await fetch(`${server}/api/info`);
  const data = await response.json();



  return {
    props: {
      info: data.data[0],
    },
    revalidate: 6000
  }

}