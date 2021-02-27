
import Header from './components/header'
import Image from 'next/image'
import axios from 'axios'
import {GetStaticsProps} from 'next'

import {useState} from 'react'






export default function Home({info}) {

  
  const [settings, setSetting] = useState({
    ...info})

  return (


    
    <div className="container">

      <style>{`
              body {
                background-color: ${settings.bgColor};
              }
            `}</style>
      <title>{settings.name.replace('/n', ' ')}</title>
      <Header />

      <div className="infoTop">
        <center>
          <h2>{settings.name.split("/n").map(function(item, idx) {
          return (
              <span key={idx}>
                  {item.trim()}
                  <br/>
              </span>
           )
      })}</h2>
          </center>
          <h3>{settings.sub}</h3>
      </div>





    <div className="content">

        <div className='contentWho'>
          <div className="infoWho">
          <h3>  Quem sou eu? </h3>
          <h5>{settings.whoI}</h5>
          </div>


          <div className="infoDescription">
          <p>{settings.detail}</p>
          </div>
        </div>
        <div>
      
  </div>


        <ul>

            <li>
    

                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">01</h3> <p>{settings.title1}</p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{settings.content1}</p>
                  </div>
                  
             <div className="imagePc">
                    <Image className="fileImage"  src={settings.urlImage1} alt="Noivas" width={130} height={215} /> 

                    </div>
            </li>
            

            <li>
      <div className="imagePc">
                    <Image className="fileImage"  src={settings.urlImage2} alt="Formandas" width={130} height={215} /> 
      </div>



                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">02</h3> <p>{settings.title2} </p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{settings.content2}</p>
                  </div>
                  
       
            </li>
            

            <li>
    

                  <div className="topNumber">

                    <div className="intoNumber">
                          <h3 className="number">03</h3> <p>{settings.title3}</p>
                    </div>

     
                    </div>             
             

                  <div className="content-text">
                    <p>{settings.content3}</p>
                  </div>
                  
             <div className="imagePc">
                    <Image className="fileImage"  src={settings.urlImage3} alt="Noivas" width={130} height={215} /> 

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