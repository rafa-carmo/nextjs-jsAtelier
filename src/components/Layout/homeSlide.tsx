import { useState } from 'react'
import useInterval from 'react-useinterval'
import { makeStyles } from "@material-ui/styles"
import {Box, Container, Hidden, Typography} from '@material-ui/core'
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "popmotion"





const slides = [
    {
        id: 1,
        url: "01.jpg"
    },
    {
        id: 2,
        url: "02.jpg"
    },
]


const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -0,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : 0 ,
        opacity: 0
      };
    }
  };
  
  
  const useStyles = makeStyles((theme) => ({
      boxImg: {
        width: "100%", 
        height: 470, 

        
      },

      img:{
        width: "100%", 
        height: "60vh", 
        display:"flex", 
        justifyContent:"left", 
        position: "relative",
        opacity: 0.1,
        transform: 'translateZ(0)',
      },

      boxTitle: {
        top: 200,
        width:"100%",
        position: "absolute",
        display: "flex",
        fontFamily: "Norican, cursive",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        textAlign: "center",
        lineHeight: 1,
        fontSize: 84,
        zIndex: 2,
        cursor: "default"

      },
      boxSubTitle: {
        top: 400,
        
        width: "100%",
        position: "absolute",
        display: "flex",
        fontFamily: "Neuton, sans-serif",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 400,
        fontSize: 23,
        textAlign: "center",
        cursor: "default"
      }
   }))
  
function HomeSlide(props) {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, slides.length, page);

    const classes = useStyles()
  
    const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    };
    const incPaginate = () =>  {
      setPage([page + 1, 1])}
    useInterval(incPaginate, 5000)
  
    return (


        
        
        <Box className={classes.boxImg}>
                <Typography className={classes.boxTitle}>

                Js<br/>Atelier
                </Typography>
                <Typography className={classes.boxSubTitle}>

                Maquiadora Profissional

                </Typography>

                
            <Hidden smDown>
                <Box className={classes.img}>

                <AnimatePresence initial={false} custom={direction}>
                <motion.img
                 key={page}
                 style={{width:"100%",backgroundImage:`url(${slides[imageIndex].url})`}}
                    src={slides[imageIndex].url}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    
                    transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 1 }
                }}
                    
                />
                </AnimatePresence>

                </Box>
        </Hidden>
            </Box>   
    );
  };
  


export default HomeSlide