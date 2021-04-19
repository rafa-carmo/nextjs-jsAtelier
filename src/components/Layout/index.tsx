import { makeStyles, Theme } from "@material-ui/core"
import Head from "next/head"
import TopBar from "./TopBar"


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: "#e6e8e6",
        display: 'flex',
        overflow: 'hidden',
        width: '100%'

    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 94,
        
    }
}))

function Layout({children, title}) {
    const classes = useStyles()
    return(

    <html>
      <Head>
      <title> {title} </title>
      <meta charSet="utf-8" />
      
    </Head>

    <body>

    <div className={classes.root}>
        <TopBar/>
        <div className={classes.wrapper}>
            <div>
                {children}
            </div>
        </div>
    </div>

    </body>
    </html>
    )
}

export default Layout