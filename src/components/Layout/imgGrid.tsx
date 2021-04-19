import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      
    },
  }),
);
  const tileData = [
    {
      img: "01.jpg",
      title: 'Image',
      author: 'author',
      featured: true,
      cols: 1,
      rows: 3
    },
    {
        img: "02.jpg",
        title: 'Image',
        author: 'author',
        featured: false,
        cols: 1,
      },
      {
        img: "03.jpg",
        title: 'Image',
        author: 'author',
        featured: false,
        cols: 1,
      },
      {
        img: "04.jpg",
        title: 'Image',
        author: 'author',
        featured: false,
        cols: 1,
      },
      {
        img: "05.jpg",
        title: 'Image',
        author: 'author',
        featured: true,
        cols: 2
      },
      {
        img: "06.jpg",
        title: 'Image',
        author: 'author',
        featured: true,
        cols: 2
      },
  ]

function ImgGridList() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    <GridList className={classes.gridList} cols={3} rows={4}>
      {tileData.map((tile) => (
        <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows || 1}>
          <img src={`grid/${tile.img}`} alt={tile.title} />
        </GridListTile>
      ))}
    </GridList>
  </div>
  )
}

export default ImgGridList