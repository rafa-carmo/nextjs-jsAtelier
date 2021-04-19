
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"
import Layout from "../components/Layout";
import CssBaseline from '@material-ui/core/CssBaseline'
import HomeSlide from "../components/Layout/homeSlide";
import ImgGridList from '../components/Layout/imgGrid';


interface Card {
  id: number
  title: string
  sub: string
  image: string
}


const useStyles = makeStyles((theme: Theme) => ({
    home: {
      fontFamily: 'Ubuntu Mono',
      fontStyle: 'bold',
      fontDisplay: 'swap',
      fontWeight: 700,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '90.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
}))

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "Teste",
      sub: "text",
      image: "https://i.ibb.co/v1cYjcN/formanda.png"
    },
    {
      id: 2,
      title: "Teste2",
      sub: "text",
      image: "https://i.ibb.co/CJz3FD7/noiva.png"
    },
    {
      id: 3,
      title: "Teste3",
      sub: "text",
      image: "https://i.ibb.co/3sxG9T1/artistica.png"
    },
  ]
  

  const classes = useStyles()


  return (
    <div>
     <Layout title="Js Atelier">
      <CssBaseline />
      
        <HomeSlide />        
{/* 
        <Box display="flex" style={{justifyContent:"center"}}>

        <Box pt={5} style={{width: "90%",display:"flex", flexDirection: "column"}}>
            <Container  style={{ height: 200,display:"flex" , justifyContent:"space-between"}}>
              <Box flex={2}>

              <Typography>
                O que fazemos?
              </Typography>
              <Typography>
                  Maquiadora profissional, professora de maquiagem.....
              </Typography>
              </Box>

              <Box flex={2}>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis tristique fermentum. Morbi quis dolor urna. Etiam nibh nisi, finibus nec urna a, molestie volutpat orci. 
                </Typography>
              </Box>
            </Container>
 
            <Grid container spacing={4} style={{width: "80%"}}>
            {cards.map((card:Card) =>{

              return (

              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2">
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>

              </Grid>
              )

            })}

            </Grid>
          </Box>

        
        </Box>

        
        <Box /> */}
            
            
            {/* <ImgGridList /> */}


     </Layout>
    </div>

  )
}
