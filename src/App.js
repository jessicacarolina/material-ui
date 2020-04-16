import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton } from "@material-ui/core";

  const styles = () => ({
    root: {
       padding: "50px 150px",
       zIndex: 999,
       position: "absolute"
     },
     card: {
       display: "flex",
       height: "calc(100vh - 100px)"
     },
     rightBorder: {
       borderRight: "solid #d0D0D0 1px"
     },
     content: {
       marginTop: 0
     },
     background: {
       position: "absolute",
       height: 200,
       width: "100%",
       top: 0,
       background: "#DDA0DD"
     },
     rightContainer: {
       background:
         "url(https://hdwallsource.com/img/2020/7/cccccc-wallpaper-70974-73394-hd-wallpapers.jpg) center center",
       flex: 1
     },
     heightAdjust: {
       display: "flex",
       flexDirection: "column"
     },
     paper: {
       background: "#87CEFF",
       padding: 20
     },
     information: {
       color: "#444"
     }
   });
   
   const App = ({ classes }) => (
    <div>
      <div className={classes.background} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <Grid container>
              <LeftContainer classes={classes} />
              <RightContainer classes={classes} />
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );

  const list = [
    { id: 1, name: "Jéssica", text: "mensagem enviada" },
    { id: 2, name: "Luann", text: "mensagem recebida" },
    { id: 3, name: "Ana", text: "mensagem recebida" },
    { id: 4, name: "João", text: "mensagem enviada" },
  ];
  
  const LeftContainer = ({ classes }) => (
    <Grid item xs={3}>
      <CardHeader
        className={classes.rightBorder}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            J
          </Avatar>
        }
      />
      <Paper className={classes.paper} elevation={0}>
        <Typography className={classes.information} variant="subheader">
          Acesse nosso grupo e fique por dentro das novidades!
        </Typography>
      </Paper>
      <List>
        {list.map(item => (
          <ListItem>
            <Avatar>{item.image}</Avatar>
            <ListItemText primary={item.name} secondary={item.text} />
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  const RightContainer = ({ classes }) => (
    <Grid className={classes.heightAdjust} item xs={9}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
        
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title="Jéssica"
      />
      <CardContent className={[classes.rightContainer, classes.content]} />
    </Grid>
  );

export default withStyles(styles)(App);
