import React from "react"
import { AppBar, IconButton, Toolbar, Typography, WithStyles, createStyles, withStyles } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

const styles = createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  }
})

interface Props extends WithStyles<typeof styles> {
}

const DenseAppBar = (props: Props) => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <Menu/>
          </IconButton>
          <Typography variant="title" color="inherit">
            Preview
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(DenseAppBar)
