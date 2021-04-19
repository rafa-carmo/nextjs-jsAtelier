import React, {useState} from 'react'
import { makeStyles } from "@material-ui/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Box, Button, Typography, Hidden, ButtonGroup, Divider, Theme } from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import { useRouter } from "next/router"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/Home'
import ImageIcon from '@material-ui/icons/Image'
import LocalSeeIcon from '@material-ui/icons/LocalSee'
import InfoIcon from '@material-ui/icons/Info'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';



interface Menu {
    id: number
    name: string
    local: string
    icon: any
}

const useStyles = makeStyles((theme: Theme) => ({



      toolbar: {
        minHeight: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      boxMenu: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      }
    },
      buttonMenu: {
        width: 150,
        
        
        fontFamily: 'Roboto',
        fontStyle: 'bold',
        fontWeight: 500,

      },
      socialMediaMenu: {
          marginRight: theme.spacing(0)
      },

      
}))

type Anchor = 'left'


const menu = [
    {
        id: 1,
        name: 'Home',
        local: '/',
        icon: (<HomeIcon />)
    },
    {
        id: 2,
        name: 'Atelier',
        local: '/',
        icon: (<LocalSeeIcon />)
    },
    {
        id: 3,
        name: 'Portifolio',
        local: '/',
        icon: (<ImageIcon />)
    },
    {
        id: 4,
        name: 'Sobre',
        local: '/',
        icon: (<InfoIcon />)
    },
    {
        id: 5,
        name: 'Contato',
        local: '/',
        icon: (<QuestionAnswerIcon />)
    },
]

function TopBar() {
    const [configAnchor, setConfigAnchor] = useState({left: false})
    const classes = useStyles()
    const router = useRouter()


    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setConfigAnchor({ ...configAnchor, [anchor]: open });
      };


      const listAnchor = (anchor: Anchor) => (
          <div

                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
                style={{display: 'flex', flexDirection: 'column'}}
                
          >

              <Button onClick={toggleDrawer(anchor, false)} startIcon={<CloseIcon />}>
                  Close
              </Button>
              {menu.map((item:Menu) => {
                    return (
                        <div>

                        <Divider />
                    <Button size="large" onClick={()=>router.push(item.local)} className={classes.buttonMenu} startIcon={item.icon}>
                        {item.name}
                    </Button>
                    </div>
                    )
                })}
          </div>
      )



    return (
    <AppBar color="default" elevation={6}>
        <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
                <Button onClick={toggleDrawer('left', true)}>
                    <MenuIcon />
                </Button>
                    <Drawer anchor={'left'} open={configAnchor['left']} onClose={toggleDrawer('left', false)}>
                        {listAnchor('left')}
                    </Drawer>
            </Hidden>
            <Box display="flex" alignItems="center">
            <Typography variant="body1">
                JS atelier
            </Typography>
          
            </Box>
            <Hidden smDown>
        <Box className={classes.boxMenu}>
            <ButtonGroup variant="text">
                {menu.map((item:Menu) => {
                    return (        
                    <Button size="large"  onClick={()=>router.push(item.local)} className={classes.buttonMenu}>
                        {item.name}
                    </Button>
                    )
                })}
            </ButtonGroup>
     
        </Box>
        </Hidden>

        <Box>
            <ButtonGroup variant="text">
            
            <Button className={classes.socialMediaMenu} onClick={() => router.push("https://www.instagram.com/jsateliermakeup/")}>
            <InstagramIcon />
            </Button>
            <Button className={classes.socialMediaMenu}onClick={() => router.push("https://www.facebook.com/jeniffersimoesmakeup")}>
            <FacebookIcon />
            </Button>

            </ButtonGroup>
        </Box>
        </Toolbar>
    </AppBar>
    )

}
export default TopBar