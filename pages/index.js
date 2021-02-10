
import Header from './components/header'



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
        <h5>{process.env.WHO_I}</h5>
        </div>

      <div></div>

        <div className="infoDescription">
        <p>{process.env.DESCRIPTION}</p>
        </div>

        <div>

        </div>
      </div>


        <ul>

            <li>
              Conteudo 1
            </li>
            

            <li>
              Conteudo 2
            </li>
            

            <li>
              Conteudo 3
            </li>
            

     
      </ul>
  </div>


    </div>
  )
}
