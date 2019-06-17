import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CollectionIcon from '@material-ui/icons/Collections';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Album from './forms/Album';
import Welcome from './contents/Welcome'
import NotFound from './contents/NotFound';
import Checkout from './contents/Checkout';


const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  itemIcon:{
    minWidth: 35,
    marginBottom: 4
  },
  linked: {
    textDecoration: 'none',
    color: 'white',
  },
  toolbar: theme.mixins.toolbar,
}));

export default function App() {   
  //For collapsing list
  
  const classes = useStyles();
  const [open=true, setOpen] = React.useState();
  const [selectedMenu='/', selectMenu] = React.useState();
  const [collapsedMenu1, collapseMenu1] = React.useState(false);
  
  
  function handleDrawerOpen() {    
    setOpen(true);
  }
  function handleDrawerClose() {    
    setOpen(false);
  }
  var content;

    switch (selectedMenu) {
        case 'album':
            content = <Album />;
            break;
        case '':
        case '/':
        case 'welcome':
            content = <Welcome />;
            break;
        case 'checkout':
            content = <Checkout />;
            break;    
        default:
            content = <NotFound />;
            break;
    }

  return (    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
      <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={open===true ? ()=>handleDrawerClose() : ()=>handleDrawerOpen()}
          >
            <MenuIcon />
          </IconButton>
        
          <Typography variant="h6" noWrap>
              <Link to="/" className={classes.linked}>React JS + Material UI with Navigation </Link>          
          </Typography>
          <IconButton 
          className={classes.toolbarButtons} 
          color="inherit" 
          aria-label="Back to home" 
          onClick={()=>(window.location="/")}>
          <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List component="nav" aria-label="Main mailbox folders">
                      <ListItem button selected={selectedMenu === ''} onClick={()=>selectMenu('')}>
                      <ListItemIcon className={classes.itemIcon}><HomeIcon/></ListItemIcon>
                          <ListItemText primary="Home" />
                      </ListItem>

                      <ListItem button onClick={()=>collapseMenu1(!collapsedMenu1)}>
                      <ListItemIcon className={classes.itemIcon}><CollectionIcon/></ListItemIcon>
                          <ListItemText primary="Album" />
                          {collapsedMenu1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse component="li" in={collapsedMenu1} timeout="auto" unmountOnExit>
                          <List disablePadding>                            
                                <ListItem 
                                selected={selectedMenu === 'album'? true : false}
                                button className={classes.nested} onClick={()=>selectMenu('album')}>
                                  <ListItemText primary="Album" />
                                </ListItem>
                                <ListItem 
                                selected={selectedMenu === 'checkout'? true : false}
                                button className={classes.nested} onClick={()=>selectMenu('checkout')}>
                                  <ListItemText primary="Checkout" />
                                </ListItem>
                             
                          </List>
                        </Collapse>
                  </List>
                  <Divider absolute />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
                  
          {content}
        
      </main>
    </div>
  );
}
